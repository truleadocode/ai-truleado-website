import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { Resend } from 'resend'

const DATA_FILE = join(process.cwd(), 'data', 'waitlist.json')

function loadEntries() {
  if (!existsSync(DATA_FILE)) return []
  try {
    return JSON.parse(readFileSync(DATA_FILE, 'utf8'))
  } catch {
    return []
  }
}

function saveEntries(entries: unknown[]) {
  const dir = join(process.cwd(), 'data')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2))
}

function thankYouHtml(name: string, role: string) {
  const isAdv = role === 'advertiser'
  const accentColor = isAdv ? '#E05A3A' : '#C49A3C'
  const roleLabel = isAdv ? 'advertiser' : 'creator'
  const bodyLine = isAdv
    ? "We'll be in touch when we're ready to start onboarding advertisers. You'll be among the first to get access."
    : "We'll reach out directly when we have brand campaigns that match your niche. No spam — just the right deals."

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>You're on the Truleado waitlist</title>
</head>
<body style="margin:0;padding:0;background:#090E1A;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#090E1A;padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Logo -->
          <tr>
            <td style="padding-bottom:40px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:${accentColor};border-radius:6px;width:24px;height:24px;text-align:center;vertical-align:middle;">
                    <span style="color:#fff;font-size:14px;font-weight:800;line-height:24px;">✦</span>
                  </td>
                  <td style="padding-left:8px;font-size:16px;font-weight:800;color:#E8E3DA;letter-spacing:-0.3px;">
                    Truleado
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#0E1420;border:1px solid rgba(232,227,218,0.09);border-radius:14px;padding:48px 44px;">

              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${accentColor};">
                You're on the list
              </p>

              <h1 style="margin:0 0 20px;font-size:28px;font-weight:800;line-height:1.1;letter-spacing:-1px;color:#E8E3DA;">
                Welcome aboard, ${name}.
              </h1>

              <p style="margin:0 0 28px;font-size:15px;font-weight:400;color:rgba(232,227,218,0.55);line-height:1.75;">
                Thanks for joining as ${roleLabel === 'advertiser' ? 'an' : 'a'} <strong style="color:#E8E3DA;font-weight:600;">${roleLabel}</strong>.
                ${bodyLine}
              </p>

              <table cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
                <tr>
                  <td style="background:rgba(232,227,218,0.06);border:1px solid rgba(232,227,218,0.09);border-radius:10px;padding:20px 24px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(232,227,218,0.4);">
                      What happens next
                    </p>
                    <p style="margin:0;font-size:14px;font-weight:400;color:rgba(232,227,218,0.6);line-height:1.7;">
                      ${isAdv
                        ? "We're onboarding advertisers in batches to make sure every campaign gets proper attention. We'll email you when your spot opens up."
                        : "We review creator profiles manually before matching. Once we have a campaign that fits you, you'll hear from us directly — no platform login needed."}
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:14px;font-weight:400;color:rgba(232,227,218,0.45);line-height:1.7;">
                Questions? Just reply to this email.<br/>
                <span style="color:#E8E3DA;font-weight:500;">Peter Hall</span><br/>
                <span style="color:rgba(232,227,218,0.4);">Founder, Truleado</span>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:28px;text-align:center;">
              <p style="margin:0;font-size:12px;font-weight:400;color:rgba(232,227,218,0.2);">
                © 2025 Truleado · You're receiving this because you signed up at truleado.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, role } = await req.json()

    if (!name?.trim() || !email?.trim() || !role) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Save entry
    const entries = loadEntries()
    const entry = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role,
      submittedAt: new Date().toISOString(),
    }
    entries.push(entry)
    saveEntries(entries)

    // Send thank-you email
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Peter at Truleado <peter@truleado.com>',
        to: email.trim(),
        subject: "You're on the Truleado waitlist ✦",
        html: thankYouHtml(name.trim(), role),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Waitlist submit error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
