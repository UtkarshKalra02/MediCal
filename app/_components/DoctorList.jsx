import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DoctorList = ({ doctorList, heading = 'Popular Doctors' }) => {
    return (
        <div className="mb-10 px-8">
            <h2 className="font-bold text-2xl text-gray-800 mb-6 text-center">
                {heading}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {doctorList.length > 0 ? doctorList.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300
          cursor-pointer"
                    >
                        <Image
                            src={item.Images[0].url}
                            alt={`Doctor ${index + 1}`}
                            width={300}
                            height={300}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4 text-center relative">
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-200 text-blue-600 text-sm font-medium px-4 py-1 rounded-full shadow-md">
                                {item.appointments[0]?.Name || 'Speciality Unknown'}
                            </div>
                            <h3 className="font-bold text-lg text-gray-700 mt-6">
                                {item.Name || `Doctor ${index + 1}`}
                            </h3>
                            <p className="text-sm text-blue-500 mt-2">
                                {item.YearExperience ? `${item.YearExperience} years of experience` : 'Experience not available'}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                {item.Address || 'Address not available'}
                            </p>
                            <Link href={'/details/' + item.documentId}>
                                <h2 className='p-2 px-3 border-[1px] border-blue-500 text-blue-300 rounded-full w-full text-center
            text-[11px] mt-2 cursor-pointer hover:bg-blue-500 hover:text-white'>Book Now</h2>
                            </Link>
                        </div>
                    </div>
                ))
                    :
                    // Add unique keys to skeleton loaders
                    [1, 2, 3].map((item) => (
                        <div key={item} className='h-[220px] bg-slate-100 w-full rounded-lg
        animate-pulse'>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DoctorList;