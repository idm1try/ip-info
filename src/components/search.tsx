import cn from '../lib/classNames'
import useIpInfo from '../lib/useIpInfo'

const Search = () => {
  const { setIp, ip } = useIpInfo()

  return (
    <div>
      <input
        placeholder='Enter ip'
        className={cn(
          'rounded-lg bg-neutral-200 py-2 px-4',
          'outline-none transition-colors',
          'duration-300 placeholder:text-neutral-600',
          'dark:placeholder:text-neutral-400',
          'dark:bg-neutral-800'
        )}
        onChange={event => setIp(event.target.value)}
        value={ip}
      />
    </div>
  )
}

export default Search
