import Link from "next/link";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer-2 bg-black-400 py-8 sm:py-12 rounded-lg">
      <div className="container mx-auto px-20">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Features</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link href="#">
                  <h5 className="border-b border-solid border-transparent  hover:text-rose-600">Represent</h5>
                </Link>
              </li>
           
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
              <Link href="#">
                  <h5 className="border-b border-solid border-transparent  hover:text-rose-600">Find More</h5>
                </Link>
              </li>
            
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">About</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
          <Link href="#">
                  <h5 className="border-b border-solid border-transparent  hover:text-rose-600">Who We're</h5>
                </Link>
          </li>
         
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">Help</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
          <Link href="#">
                  <h5 className="border-b border-solid border-transparent  hover:text-rose-600">Helping</h5>
                </Link>
          </li>
        
        </ul>
      </div>
      <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
        <div className="flex sm:justify-center xl:justify-start">
          <a href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
          <Image
          className="ml-1"
          src="/nav-icon2.svg"
         
          width={20}
          height={1}
          priority
        />
          </a>
          <a href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-gradient-to-r from-pink-500 to-rose-500 ">
          <Image
          className="ml-1"
          src="/nav-icon3.svg"
         
          width={20}
          height={1}
          priority
        />
          </a>
         
        </div>
      </div>
    </div>

   
  </div>
</footer>
  );
};

export default Footer;
