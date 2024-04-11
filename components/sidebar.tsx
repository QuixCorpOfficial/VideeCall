"use client"
import React from 'react'; // Import React
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => { // Changed component name to start with uppercase
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive = pathname && (pathname === link.route || pathname.startsWith(`${link.route}/`));
          return (
            <Link href={link.route} key={link.label} className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
              'bg-slate-700 shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]': isActive,
            })}
            >
              <Image 
              src={link.imgUrl}
              alt={link.label}
              width={24}
              height={24}
              />
              <p className="text-lg max-lg:hidden">
                {link.label}
              </p>
            </Link>
          )
          })}
      </div>
    </section>
  )
}

export default Sidebar;
