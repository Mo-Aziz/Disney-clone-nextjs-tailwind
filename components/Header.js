import Image from 'next/image'
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid'
import { getProviders, signIn, signOut, useSession} from "next-auth/react";
import { useRouter } from 'next/router';
 

function Header() {



  const { data: session } = useSession()
const router = useRouter();

  return (
    <div className="sticky top-0 z-50 flex h-[75px] items-center bg-[#040714] px-10 md:px-12">
      <Image
        src="/assets/images/logo.svg"
        width={80}
        height={80}
        className=" cursor-pointer"
        onClick={()=> router.push("/")}
      />
      {/* {
        session && ( */}
<div className=" ml-10 hidden items-center  space-x-6 md:flex  ">
        <a className="header-icons group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-icons group">
          <SearchIcon className="h-4" />
          <span className="span">Search</span>
        </a>
        <a className="header-icons group">
          <PlusIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="header-icons group">
          <StarIcon className="h-4" />
          <span className="span">Originals</span>
        </a>
        <a className="header-icons group">
          <img src="/assets/images/movie-icon.svg" alt="" className="h-5" />
          <span className="span">Movies</span>
        </a>
        <a className="header-icons group">
          <img src="/assets/images/series-icon.svg" alt="" className="h-5" />
          <span className="span">Series</span>
        </a>
      </div>
        {/* )
      } */}

      {/* showing login button when !session */}
      {/* {!session ? ( */}
 <button className="ml-auto rounded border px-4 py-2 font-medium uppercase tracking-wide transition duration-200 hover:bg-white hover:text-black"
 onClick={()=>signIn({ callbackUrl: "/" })}>
   Login
 </button>
      {/* ) : (
        <img src={session.user.image} alt=""
        className='ml-auto h-12 w-12 rounded-full object-cover cursor-pointer'
        onClick={signOut}/>
      )}
       */}
     
    </div>
  )
}

export default Header

