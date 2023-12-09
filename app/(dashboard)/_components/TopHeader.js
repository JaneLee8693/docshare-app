// import React from 'react'
// import Image from 'next/image'
// import { AlignJustify } from 'lucide-react'
// import { UserButton } from '@clerk/nextjs'

// function TopHeader() {
//   return (
//     <div className='flex p-5 border-b items-center justify-between md:justify-end'>
//         <AlignJustify className='md:hidden'/>
//         <Image src='/logo.svg' width={40} height={30} className='md:hidden'/>
//         <UserButton/>
//     </div>
//   )
// }

// export default TopHeader
// TopHeader.js
import React from 'react';
import Image from 'next/image';
import { AlignJustify } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

function TopHeader({ toggleSidebar }) {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
      <AlignJustify
        className='md:hidden cursor-pointer'
        onClick={toggleSidebar}
      />
      <Image
        src='/logo.svg'
        width={40}
        height={30}
        className='md:hidden cursor-pointer'
        onClick={toggleSidebar}
      />
      <UserButton />
    </div>
  );
}

export default TopHeader;
