export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const ip = searchParams.get('ip')

  const info = await fetch(
    `https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`,
  )

  const ipInfo = await info.json()

  return new Response(JSON.stringify(ipInfo), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  })
}
