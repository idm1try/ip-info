'use client'

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
  const [ip, setIp] = useState<string>('')
  const { data: getIp } = useSWR('https://ipinfo.io/ip', ipFetcher)
  const { data, error } = useSWR(`/api/ipinfo?ip=${ip ?? getIp}`, fetcher)

  return {
    ip,
    setIp,
    ipInfo: data,
    isLoading: !data && !error,
  }
}
