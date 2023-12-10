import React from 'react'

function Upload() {
  return (
    <div className='p-5 px-8 md:px-28'>
        <h2 className='text-[20px] text-center m-5'>Let's <strong className='text-primary'>upload</strong> file and <strong className='text-primary'>share</strong> it</h2>
        <UploadForm/>
    </div>
  )
}

export default Upload