'use client'

import { cn } from '@/lib/utils'
import useIpInfo from '../lib/useIpInfo'

const Page = () => {
  const { ipInfo, isLoading, ip, setIp } = useIpInfo()

  return (
    <div>
      <input
        aria-label='Enter ip'
        placeholder={ipInfo?.ip}
        type='text'
        spellCheck='false'
        value={ip}
        onChange={event => setIp(event.target.value)}
        className={cn(
          'rounded-md border border-surface0 bg-base',
          'py-2 px-4 shadow-sm',
          'outline-none transition-colors duration-300',
          'placeholder:text-overlay0 hover:border-surface1',
          'focus:text-text focus:border-surface2',
        )}
      />
      {ipInfo && !isLoading && (
        <div>
          <ul className='animated-list mt-7'>
            {ipInfo?.hostname && (
              <li>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>Hostname</span>
                  <div>{ipInfo.hostname}</div>
                </div>
              </li>
            )}
            {ipInfo?.org && (
              <li>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>ISP</span>
                  <div>{ipInfo.org.slice(ipInfo.org.indexOf(' '))}</div>
                </div>
              </li>
            )}
            {ipInfo?.timezone && (
              <li>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>Timezone</span>
                  <div>{ipInfo.timezone}</div>
                </div>
              </li>
            )}
            {ipInfo?.city && (
              <li>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>City</span>
                  <div>{ipInfo.city}</div>
                </div>
              </li>
            )}
            {ipInfo?.region && (
              <li>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>Region</span>
                  <div>{ipInfo.region}</div>
                </div>
              </li>
            )}
            {ipInfo?.country && (
              <li>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>Country</span>
                  <div>{ipInfo.country}</div>
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Page
