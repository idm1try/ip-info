import Link from 'next/link';
import { TbHome } from 'react-icons/tb';

const NotFound = () => (
  <div className='text-center animate-fade_in_up'>
    <div className='my-10'>
      <h1 className='text-5xl font-bold text-teal-600 dark:text-teal-300'>404</h1>
      <p className='text-xl font-medium my-5'>Oops, not found</p>
    </div>
    <Link href='/'>
      <button className='bg-teal-600 hover:bg-teal-700 active:bg-teal-800 dark:bg-teal-300 dark:hover:bg-teal-400 dark:active:bg-teal-500 text-white dark:text-zinc-900 py-2 px-4 rounded-lg mt-3 font-bold transition-colors duration-200'>
        <TbHome className='inline-block mb-1' /> Go to home
      </button>
    </Link>
  </div>
);

export default NotFound;
