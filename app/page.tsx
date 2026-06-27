import LandingPage from '@/components/LandingPage'

export default function Home({
  searchParams,
}: {
  searchParams: { tab?: string }
}) {
  const initialTab =
    searchParams.tab === 'influencer' ? 'influencer' : 'advertiser'
  return <LandingPage initialTab={initialTab} />
}
