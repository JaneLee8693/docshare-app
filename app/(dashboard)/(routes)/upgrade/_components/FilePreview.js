import React from 'react'
import Image from 'next/image'

function FilePreview({file}) {
  return (
    <div className='flex items-center gap-2'>
        <Image src='/file.png' width={50} height={50} alt='file image'/>
        <div className='text-left'>
            <h2>{file.name}</h2>
            <h2 className='text-[12px] text-gray-400'>{file?.type} / {(file?.size/1024/1024).toFixed(2)}MB</h2>
        </div>
    </div>
  )
}

export default FilePreview