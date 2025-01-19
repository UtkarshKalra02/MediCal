'use client'
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const Search = ({ params }) => {
    const [doctorList, setDoctorList] = useState([]);
    const [categoryName, setCategoryName] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const resolvedParams = await params; // Unwrap params
                const decodedName = decodeURIComponent(resolvedParams.cname); // Decode the category name
                setCategoryName(decodedName);   
                await getDoctors(decodedName); // Fetch filtered doctors
            } catch (err) {
                console.error('Error resolving params or fetching doctors:', err);
            }
        })();
    }, [params]);

    const getDoctors = async (category) => {
        try {
            const res = await GlobalApi.getDoctorbyCategory(category);
            console.log('Filtered Doctors:', res.data.data); // Debugging log
            setDoctorList(res.data.data || []); // Update the doctor list
        } catch (err) {
            console.error('Error fetching doctors:', err);
        }
    };

    return (
        <div className='mt-5'>
            {categoryName ? (
                <DoctorList heading={categoryName} doctorList={doctorList} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Search;