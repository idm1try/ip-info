import { TbClock, TbCloudComputing, TbDevicesPc, TbMapPin } from 'react-icons/tb';
import Search from '../components/Search';
import { useClipboard } from '../lib/useClipboard';
import useIpInfo from '../lib/useIpInfo';

const Page = () => {
  const { ipInfo, isLoading } = useIpInfo();
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <div className='animate-fade_in_up'>
      <Search />
      {ipInfo && (
        <div>
          {!isLoading && (
            <div>
              <h1
                className='text-2xl min-[340px]:text-4xl text-center font-bold my-20 hover:text-teal-600 active:text-teal-600/80 dark:active:text-teal-400/80 dark:hover:text-teal-400 transition-colors duration-500 cursor-pointer'
                onClick={() => clipboard.copy(ipInfo.ip)}
              >
                {ipInfo.ip}
              </h1>
              <div className='grid gap-5'>
                {ipInfo.hostname && (
                  <div className='md:flex md:justify-between'>
                    <div className='font-bold'>
                      <TbDevicesPc className='inline-block mb-1 mr-1' /> Hostname
                    </div>
                    <div>{ipInfo.hostname}</div>
                  </div>
                )}
                {ipInfo.city && (
                  <div className='md:flex md:justify-between'>
                    <div className='font-bold'>
                      <TbMapPin className='inline-block mb-1 mr-1' /> Location
                    </div>
                    <div>
                      {ipInfo.city}, {ipInfo.region}, {ipInfo.country}
                    </div>
                  </div>
                )}
                {ipInfo.org && (
                  <div className='md:flex md:justify-between'>
                    <div className='font-bold'>
                      <TbCloudComputing className='inline-block mb-1 mr-1' /> ISP
                    </div>
                    <div>{ipInfo.org.slice(ipInfo.org.indexOf(' '))}</div>
                  </div>
                )}
                {ipInfo.timezone && (
                  <div className='md:flex md:justify-between'>
                    <div className='font-bold'>
                      <TbClock className='inline-block mb-1' /> Timezone
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
