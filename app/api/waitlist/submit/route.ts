import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { Resend } from 'resend'

function thankYouHtml(name: string, role: string) {
  const isAdv = role === 'advertiser'
  const accentColor = isAdv ? '#4D489A' : '#9894CC' // Violet Ink 500 / 300 — brand ramp, not ember (ember is reserved for the single most important CTA per page)
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
<body style="margin:0;padding:0;background:#0E0D20;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E0D20;padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Logo -->
          <tr>
            <td style="padding-bottom:40px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#2A2760;border-radius:6px;width:24px;height:24px;text-align:center;vertical-align:middle;">
                    <span style="color:#fff;font-size:14px;font-weight:600;line-height:24px;">✦</span>
                  </td>
                  <td style="padding-left:8px;font-size:16px;font-weight:600;color:#F8F7FF;letter-spacing:-0.02em;">
                    Truleado
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#15132C;border:1px solid #25224A;border-radius:14px;padding:48px 44px;">

              <p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${accentColor};">
                You're on the list
              </p>

              <h1 style="margin:0 0 20px;font-size:28px;font-weight:400;line-height:1.1;letter-spacing:-0.02em;color:#F8F7FF;">
                Welcome aboard, ${name}.
              </h1>

              <p style="margin:0 0 28px;font-size:15px;font-weight:400;color:#635E96;line-height:1.75;">
                Thanks for joining as ${roleLabel === 'advertiser' ? 'an' : 'a'} <strong style="color:#F8F7FF;font-weight:600;">${roleLabel}</strong>.
                ${bodyLine}
              </p>

              <table cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
                <tr>
                  <td style="background:rgba(77,72,154,0.10);border:1px solid #25224A;border-radius:10px;padding:20px 24px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#635E96;">
                      What happens next
                    </p>
                    <p style="margin:0;font-size:14px;font-weight:400;color:#9894CC;line-height:1.7;">
                      ${isAdv
                        ? "We're onboarding advertisers in batches to make sure every campaign gets proper attention. We'll email you when your spot opens up."
                        : "We review creator profiles manually before matching. Once we have a campaign that fits you, you'll hear from us directly — no platform login needed."}
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:14px;font-weight:400;color:#635E96;line-height:1.7;">
                Questions? Just reply to this email.<br/>
                <span style="color:#F8F7FF;font-weight:500;">Peter Hall</span><br/>
                <span style="color:#635E96;">Founder, Truleado</span>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:28px;text-align:center;">
              <p style="margin:0;font-size:12px;font-weight:400;color:#3E3A6E;">
                © 2026 Truleado · You're receiving this because you signed up at truleado.com
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

    const entry = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role,
      submittedAt: new Date().toISOString(),
    }

    // Store each entry as its own blob — no race conditions, works on Vercel
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      await put(`waitlist/${entry.id}.json`, JSON.stringify(entry), {
        access: 'public',
        addRandomSuffix: false,
        contentType: 'application/json',
      })
    }

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
