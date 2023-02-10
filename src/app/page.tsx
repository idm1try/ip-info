'use client'

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
        className='rounded-lg border border-neutral-400/30 bg-white py-2 px-4 text-neutral-700 shadow-sm outline-none transition-colors duration-300 placeholder:text-neutral-600 hover:text-neutral-900/50 hover:shadow-sm focus:text-neutral-900/50 focus:shadow-sm dark:border-neutral-500/30 dark:bg-neutral-900 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:hover:border-neutral-500/50 dark:hover:text-white dark:focus:border-neutral-500/50 dark:focus:text-white'
      />
      {ipInfo && !isLoading && (
        <div>
          <ul className='animated-list mt-7'>
            {ipInfo?.hostname && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-neutral-600 dark:text-neutral-400 md:w-28'>
                    Hostname
                  </span>
                  <div>{ipInfo.hostname}</div>
                </div>
              </li>
            )}
            {ipInfo?.org && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-neutral-600 dark:text-neutral-400 md:w-28'>
                    ISP
                  </span>
                  <div>{ipInfo.org.slice(ipInfo.org.indexOf(' '))}</div>
                </div>
              </li>
            )}
            {ipInfo?.timezone && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-neutral-600 dark:text-neutral-400 md:w-28'>
                    Timezone
                  </span>
                  <div>{ipInfo.timezone}</div>
                </div>
              </li>
            )}
            {ipInfo?.city && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-neutral-600 dark:text-neutral-400 md:w-28'>
                    City
                  </span>
                  <div>{ipInfo.city}</div>
                </div>
              </li>
            )}
            {ipInfo?.region && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-neutral-600 dark:text-neutral-400 md:w-28'>
                    Region
                  </span>
                  <div>{ipInfo.region}</div>
                </div>
              </li>
            )}
            {ipInfo?.country && (
              <li className='transition-all duration-300'>
                <div className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'>
                  <span className='text-neutral-600 dark:text-neutral-400 md:w-28'>
                    Country
                  </span>
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
