import Banner from '@/app/components/Services/Banner';
import React from 'react'

const page = async ({ params }: { params: { service: string } }) => {
    const data = await params;
    return <Banner service={data.service} />
}

export default page