// import React from 'react'
// import SideNav from './_components/SideNav'
// import TopHeader from './_components/TopHeader'

// function layout({children}) {
//   return (
//     <div>
//         <div className='h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden'>
//           <SideNav/>
//         </div>
//         <div className='md:ml-64'>
//           <TopHeader/>
//           {children}
//         </div>
//     </div>
//   )
// }

// export default layout
// layout.js

"use client"
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';
import Toast from '../_components/Toast';

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div
        className={`h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex ${
          isSidebarOpen ? '' : 'hidden'
        }`}
      >
        <SideNav />
      </div>
      <div className={`md:ml-64 ${isSidebarOpen ? 'ml-64' : ''}`}>
        <TopHeader toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
}

export default Layout;

// "use client"
// import React, { useState } from 'react'
// import SideNav from './_components/SideNav'
// import TopHeader from './_components/TopHeader'
// // import Toast from '../_components/Toast';

// function layout({ children }) {
//   const [toggle, setToggle] = useState(false);
  
//   return (
//     // <ToastContext.Provider value={{toast,setToast}}>
//     <div>
//       <div className=' h-full w-64 flex-col 
//         fixed inset-y-0 z-30 md:flex hidden bg-white'>
//         <SideNav closeSideBar={()=>setToggle(false)}/>
//       </div>
   
//       {toggle ? <div className=' h-full w-64 flex-col 
//         fixed inset-y-0 z-30 bg-white flex'>
//         <SideNav closeSideBar={()=>setToggle(false)}/>
//       </div> : null}

//       <div className='md:ml-64'>
//         <TopHeader setToggleBar={() => 
//           setToggle(true)} />
//         {children}
//         {/* <Toast/> */}
//       </div>

//     </div>
    
//   )
// }

// export default layout;