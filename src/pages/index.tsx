import Search from '../components/search'
import useIpInfo from '../lib/useIpInfo'

const Page = () => {
  const { ipInfo, isLoading } = useIpInfo()

  return (
    <div>
      <Search />
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
