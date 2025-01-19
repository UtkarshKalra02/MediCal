'use client'

import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import DoctorDetail from '../_components/DoctorDetail';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';

const Details = ({ params }) => {
    // Unwrap the `params` Promise using `use()`
    const unwrappedParams = use(params);
    const { recordid } = unwrappedParams;

    const [doctor, setdoctor] = useState()
    useEffect(() => {
        getDoctorbyId();
    }, []);

    const getDoctorbyId = () => {
        GlobalApi.getDoctorbyId(recordid).then(res => {
            console.log(res);
            setdoctor(res.data.data);
        });
    };

    return (
        <div className=''>
            <h2 className='font-bold text-[22px] mt-12 mb-12'>Details</h2>

            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='col-span-3'>
                   {doctor&& <DoctorDetail doctor={doctor}/>}
                </div>
                <div>
                <DoctorSuggestionList/>
                </div>
            </div>
        </div>
    );
};

export default Details;