import useIpInfo from '../lib/useIpInfo';

const Search = () => {
  const { setIp } = useIpInfo();

  return (
    <div>
      <input
        placeholder='Enter ip'
        className='w-full bg-gray-100 hover:bg-gray-200 focus:bg-gray-300/70 placeholder:text-gray-500 dark:bg-gray-800 outline-none dark:focus:bg-gray-800/50 dark:hover:bg-gray-800/70 transition-colors duration-500 py-2 px-4 rounded-lg'
        onChange={event => setIp(event.target.value)}
      />
    </div>
  );
};

export default Search;
