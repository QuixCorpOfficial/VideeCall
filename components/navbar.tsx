import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <div className="flex items-center justify-between w-full"> {/* Added justify-between and w-full */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={42}
            height={42}
            alt="VideeCall logo"
            className="max-sm:size-10"
          />
          
        </Link>
        <div className="flex items-center gap-5"> {/* Removed flex-between, added items-center */}
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
