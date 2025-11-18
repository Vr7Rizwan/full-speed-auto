"use client";
import { findService, ServiceType } from '@/app/resources/services'
import React, { useEffect, useState } from 'react'

function Banner({ service }: { service: string }) {
    const [data, setData] = useState<ServiceType>();
    useEffect(() => {
        findService(service);
    }, [service])
    return (
        <div>Banner</div>
    )
}

export default Banner