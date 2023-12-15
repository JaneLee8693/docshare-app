import React from 'react'
import Constant from '../_utils/Constant'

function About() {
  return (
    <section id='about' className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className='text-primary'>DocShare</span> empowers management and security in sharing files
          </h1>
          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            {Constant.about}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About