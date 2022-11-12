import useIpInfo from '../lib/useIpInfo';

const Search = () => {
  const { setIp } = useIpInfo();

  return (
    <div>
      <input
        placeholder='Enter ip'
        className='w-full rounded-lg bg-gray-100 py-2 px-4 outline-none transition-colors duration-500 placeholder:text-gray-500 hover:bg-gray-200 focus:bg-gray-300/70 dark:bg-gray-800 dark:hover:bg-gray-800/70 dark:focus:bg-gray-800/50'
        onChange={event => setIp(event.target.value)}
      />
    </div>
  );
};

export default Search;
