import React from 'react'

const Banner = ({ banner }: { banner: string }) => {
    return (
        <div className='w-full h-full pb-1 md:pb-12'>
            <img src={banner} alt="" />
        </div>
    )
}

export default Banner