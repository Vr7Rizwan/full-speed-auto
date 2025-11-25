import React from 'react'

const Banner = ({ banner }: { banner: string }) => {
    return (
        <div className='w-full h-full'>
            <img src={banner} alt="" />
        </div>
    )
}

export default Banner