import { useRouter } from 'next/router';
import * as React from 'react';
import { useState, useEffect } from 'react';

const ClubDetail = (() => {
    const router = useRouter();
    
    return <div className='flex flex-col'>
        <h1>{router.query.name}</h1>
        <h1>{router.query.description}</h1>
    </div>
})

export default ClubDetail;

