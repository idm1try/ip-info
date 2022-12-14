import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { IpInfoResponse } from './types'

async function ipFetcher(url: string) {
  return await fetch(url).then(res => res.text())
}

async function fetcher(url: string) {
  return await fetch(url).then(res => res.json())
}

export default function useIpInfo(): IpInfoResponse {
  const { data: getIp } = useSWR('https://ipinfo.io/ip', ipFetcher)
  const [ip, setIp] = useState('')

  useEffect(() => {
    window.addEventListener('input', event =>
      setIp((event.target as HTMLInputElement).value)
    )
    return () =>
      window.removeEventListener('input', event =>
        setIp((event.target as HTMLInputElement).value)
      )
  })

  const { data: ipInfo, error } = useSWR(
    `/api/ipinfo?ip=${ip !== '' ? ip : getIp}`,
    fetcher
  )

  return {
    ip,
    setIp,
    ipInfo,
    isLoading: !ipInfo && !error,
  }
}
