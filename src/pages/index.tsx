import { TbClock, TbCloudComputing, TbDevicesPc, TbMapPin } from 'react-icons/tb';
import Search from '../components/Search';
import { useClipboard } from '../lib/useClipboard';
import useIpInfo from '../lib/useIpInfo';

const Page = () => {
  const { ipInfo, isLoading } = useIpInfo();
  const clipboard = useClipboard({ timeout: 1300 });

  return (
    <div className='animate-fade_in_up'>
      <Search />
      {ipInfo && (
        <div>
          {!isLoading && (
            <div>
              <div
                className='my-20 cursor-pointer text-center text-2xl font-bold transition-colors duration-500 hover:text-teal-600 active:text-teal-600/80 dark:hover:text-teal-400 dark:active:text-teal-400/80 min-[340px]:text-4xl'
                onClick={() => clipboard.copy(ipInfo.ip)}
              >
                <div className='relative inline-block'>
                  {clipboard.copied && (
                    <div className='absolute bottom-8 animate-fade_in_up_down text-sm text-gray-500 min-[340px]:bottom-12 min-[340px]:text-base'>
                      Copied!
                    </div>
                  )}
                  {ipInfo.ip}
                </div>
              </div>
              <div className='grid gap-5'>
                {ipInfo.hostname && (
                  <div className='md:flex md:justify-between'>
                    <div className='font-bold'>
                      <TbDevicesPc className='mb-1 mr-1 inline-block' /> Hostname
                    </div>
                    <div>{ipInfo.hostname}</div>
                  </div>
                )}
                {ipInfo.city && (
                  <div className='md:flex md:justify-between'>
                    <div className='font-bold'>
                      <TbMapPin className='mb-1 mr-1 inline-block' /> Location
                    </div>
                    <div>
                      {ipInfo.city}, {ipInfo.region}, {ipInfo.country}
                    </div>
                  </div>
                )}
                {ipInfo.org && (
                  <div className='md:flex md:justify-between'>
                    <div className='font-bold'>
                      <TbCloudComputing className='mb-1 mr-1 inline-block' /> ISP
                    </div>
                    <div>{ipInfo.org.slice(ipInfo.org.indexOf(' '))}</div>
                  </div>
                )}
                {ipInfo.timezone && (
                  <div className='md:flex md:justify-between'>
                    <div className='font-bold'>
                      <TbClock className='mb-1 mr-1 inline-block' /> Timezone
                    </div>
                    <div>{ipInfo.timezone}</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
