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
          'rounded-lg border border-crust bg-mantle',
          'py-2 px-4 capitalize text-subtext0 shadow-sm',
          'outline-none transition-all duration-300',
          'placeholder:text-overlay0 hover:text-subtext1',
          'focus:ring-2 ring-surface1 ring-offset-2 ring-offset-base',
        )}
      />
      {ipInfo && !isLoading && (
        <div>
          <ul className='animated-list mt-7'>
            {ipInfo?.hostname && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>Hostname</span>
                  <div>{ipInfo.hostname}</div>
                </div>
              </li>
            )}
            {ipInfo?.org && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>ISP</span>
                  <div>{ipInfo.org.slice(ipInfo.org.indexOf(' '))}</div>
                </div>
              </li>
            )}
            {ipInfo?.timezone && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>Timezone</span>
                  <div>{ipInfo.timezone}</div>
                </div>
              </li>
            )}
            {ipInfo?.city && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>City</span>
                  <div>{ipInfo.city}</div>
                </div>
              </li>
            )}
            {ipInfo?.region && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-overlay0 md:w-28'>Region</span>
                  <div>{ipInfo.region}</div>
                </div>
              </li>
            )}
            {ipInfo?.country && (
              <li className='transition-all duration-300'>
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
