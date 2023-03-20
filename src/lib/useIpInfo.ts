import { useState } from 'react'
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
  const [ip, setIp] = useState<string>('')

  const { data, error } = useSWR(`/ip?ip=${ip !== '' ? ip : getIp}`, fetcher)

  return {
    ip,
    setIp,
    ipInfo: data,
    isLoading: !data && !error,
  }
}
