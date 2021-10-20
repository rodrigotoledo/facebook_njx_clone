import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline";


export default function Header() {
  return (
    <div>

      {/* left */}
      <div className='flex items-center'>
        <Image src="https://links.papareact.com/5me" width={40} height={40} layout='fixed' />

        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input type='text' placeholder="Search Facebook" className='flex ml-2 items-center bg-transparent outline-none' />
        </div>
      </div>

      {/* center */}
      {/* right */}
    </div>
  )
}
