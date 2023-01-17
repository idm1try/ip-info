import useIpInfo from '../lib/useIpInfo'

const Search = () => {
  const { setIp, ip } = useIpInfo()

  return (
    <div>
      <input
        placeholder='Enter ip'
        className='rounded-lg bg-neutral-200 py-2 px-4 outline-none transition-colors duration-300 placeholder:text-neutral-600 hover:bg-neutral-300/70 active:bg-neutral-300/50 dark:bg-neutral-800 dark:placeholder:text-neutral-400 dark:hover:bg-neutral-700/50 dark:active:bg-neutral-700/70'
        onChange={event => setIp(event.target.value)}
        value={ip}
      />
    </div>
  )
}

export default Search
