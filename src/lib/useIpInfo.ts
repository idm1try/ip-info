import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { IpInfoResponse } from './types';

async function fetcher(url: string) {
  return await fetch(url).then(res => res.json());
}

export default function useIpInfo(): IpInfoResponse {
  const [ip, setIp] = useState(null);

  useEffect(() => {
    window.addEventListener('input', event => setIp((event.target as HTMLInputElement).value));
    return () =>
      window.removeEventListener('input', event => setIp((event.target as HTMLInputElement).value));
  });

  const { data: ipInfo, error } = useSWR(`/api/ipinfo?ip=${ip}`, fetcher);

  return {
    ip,
    setIp,
    ipInfo,
    isLoading: !ipInfo && !error,
  };
}
