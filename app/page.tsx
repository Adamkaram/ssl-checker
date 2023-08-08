"use client"

import Image from "next/image";
import Link from "next/link";
import SearchInput from './searchInput';
import Pricing from './Pricing';
export default function Home() {
  return (
    <main
      className="pb-12"
      style={{
        backgroundImage: `url('/banner-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

      }}>
      <nav className="relative container mx-auto p-6 bg-transparent ">
        <div className=" flex items-center justify-between">
          <div className="pt-2">
            <Image
              alt=" "
              src="/card-icon-correct.png"
              width={40}
              height={20}
              priority
            />
          </div>
          <div className="hidden md:flex space-x-6 ">
            <Link href="/about">
              <h1 className="hover:text-rose-400 text-xl font-bold	font-sans">
                Home
              </h1>
            </Link>
            <Link href="/about">
              <h1 className="hover:text-rose-400 text-xl font-bold	font-sans">
                about us
              </h1>
            </Link>
            <Link href="/about">
              <h1 className="hover:text-rose-400 text-xl font-bold	font-sans">
                privacy
              </h1>
            </Link>
            <Link href="/about">
              <h1 className="hover:text-rose-400 text-xl font-bold	font-sans">
                sevices
              </h1>
            </Link>
            <Link href="/about">
              <h1 className="hover:text-rose-400 text-xl font-bold	font-sans">
                about
              </h1>
            </Link>
          </div>

          <Link href="/Gothere" className="hidden md:block ">
            <h1 className="p-3 px-6 pt-2 text-white bg-transparent rounded-full baseline ">
              <p className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Contact</span>
                </span>
              </p>
            </h1>
          </Link>
          <button className="block hamburger md:hidden focus:outline-none">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className="md:hidden">
          <div className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>

      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <p className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          aim to convey the purpose of the SSL 
          </p>
          {/* <p className="font-sans max-w-sm text-center text-cyan-500  text-lg	 md:text-left">
           
          </p> */}
          <p className={` m-0 max-w-[30ch] text-xl `}>
            
          Test Your SSL Certificate to keep your site better{" "}
            <a className="underline decoration-rose-500">
              plan day-to-day tasks{" "}
            </a>
            while keeping the larger team goals in view.
          </p>
          
        </div>
        <div className="md:w-1/2">
          <Image
            src="/header-img.svg"
            alt="Vercel Logo"
            className=" "
            width={500}
            height={300}
            priority
          />
        </div>
      </div>
      <SearchInput/>
      <Pricing/>
    </main>
  );
}