'use client';
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';

function DoctorSuggestionList() {
    const [doctorList, setDoctorList] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        getDoctorList();
    }, []);

    const getDoctorList = async () => {
        try {
            const response = await GlobalApi.getDoctorList();
            setDoctorList(response.data.data || []); // Handle empty or undefined data
        } catch (error) {
            console.error('Error fetching doctor suggestions:', error);
        } finally {
            setLoading(false); // Set loading to false after the data is fetched
        }
    };

    return (
        <div className="space-y-6 bg-white rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Suggested Doctors</h2>

            {/* Loading State */}
            {loading ? (
                <p className="text-sm text-gray-500">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {doctorList.length > 0 ? (
                        doctorList.slice(0, 5).map((doctor) => (
                            <Link href={`/details/${doctor.documentId}`} key={doctor.id}>
                                <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition">
                                    {/* Doctor Image */}
                                    <Image
                                        src={doctor.Images?.[0]?.url || '/placeholder.jpg'}
                                        alt={doctor.Name || 'Doctor Image'}
                                        width={50}
                                        height={50}
                                        className="rounded-full object-cover w-12 h-12"
                                    />

                                    {/* Doctor Details */}
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-800">
                                            {doctor.Name}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            {doctor.appointments[0]?.Name || 'Speciality Unknown'}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No suggestions available.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default DoctorSuggestionList;