// DesktopNav.tsx
import {
  BadgeCheck,
  Chrome,
  Instagram,
  PanelsTopLeft,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';


import { NavItem } from './nav-item';
import Image from 'next/image';

export default function DesktopNav() {
  return (
    <>
      <aside className="inset-x-0 top-0 z-10 hidden flex-col border-r bg-gradient-to-t from-gray-800 to-black sm:flex">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-transparent px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <nav className="flex flex-row items-top gap-6 px-2 sm:py-5">
            <Link
              href="https://themarketing.com.br/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-9 md:w-9 md:text-base transition-all duration-200 ease-in-out hover:bg-gray-700"
            >
                   <Image
          src="/favicon.ico"
          alt="Logo"
          width={30}
          height={30}
          
        />

              {/* <span className="sr-only">®TM</span> */}
            </Link>
            <NavItem href="/website" label="Site">
              <PanelsTopLeft  className="h-6 w-6 transition-all duration-620 ease-in-out  group-hover:text-white animate-pulse   hover:text-gray-300 hover:animate-in hover:animate-none " />
            </NavItem>
            <NavItem href="/logotypes" label="Logotipos">
              <BadgeCheck  className="h-6 w-6 transition-all duration-600 ease-in-out group-hover:text-white animate-pulse  hover:text-gray-300 hover:animate-in hover:animate-none  " />
            </NavItem>
            <NavItem href="/publicity/ads" label="Ads">
              <Chrome  className="h-6 w-6 transition-all duration-680 ease-in-out group-hover:text-white animate-pulse   hover:text-gray-300 hover:animate-in hover:animate-none  " />
            </NavItem>
            <NavItem href="/publicity/meta" label="Meta">
              <Instagram  className="h-6 w-6 transition-all duration-580 ease-in-out group-hover:text-white animate-pulse   hover:text-gray-300 hover:animate-in hover:animate-none " />
            </NavItem>
            <NavItem href="/campaign" label="Campanha">
              <TrendingUp className="h-6 w-6 transition-all duration-608 ease-in-out group-hover:text-white animate-pulse  hover:text-gray-300 hover:animate-in hover:animate-none " />
            </NavItem>
          </nav>
        </header>
      </aside>

     
    </>
  );
}
