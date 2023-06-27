import { useRouter } from 'next/router';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { IoArrowBackCircle } from 'react-icons/io5'

const ClubDetail = (() => {
    const router = useRouter();
    
    // TODO: change style 
    return <div className='flex flex-col'>
        <h1>{router.query.name}</h1>
        <h1>{router.query.description}</h1>
        <IoArrowBackCircle onClick={
            () => router.push('/club')
        } />
    </div>
})

export default ClubDetail;

