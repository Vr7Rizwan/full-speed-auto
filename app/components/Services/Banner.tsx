import React from 'react'

const Banner = ({ banner }: { banner: string }) => {
    return (
        <div className='w-full h-94 pb-1 md:pb-12 bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${banner})` }}>
        </div>
    )
}

export default Banner