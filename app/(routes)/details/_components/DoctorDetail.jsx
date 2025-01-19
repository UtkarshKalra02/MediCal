import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import BookAppointment from './BookAppointment';

const DoctorDetail = ({ doctor }) => {
    const socialMediaList = [
        { id: 1, icon: '/youtube.png', url: '' },
        { id: 2, icon: '/facebook.png', url: '' },
        { id: 3, icon: '/linkedin.png', url: '' },
        { id: 4, icon: '/instagram.png', url: '' },
    ];

    return (
        <div className="space-y-8 mb-20">
            {/* Doctor Profile */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6">
                {/* Doctor Image */}
                <div className="flex-shrink-0 w-full md:w-1/3">
                    <Image
                        src={doctor.Images[0]?.url || '/placeholder.jpg'}
                        width={300}
                        height={300}
                        alt="doctor-image"
                        className="rounded-lg object-cover w-full h-64"
                    />
                </div>

                {/* Doctor Info */}
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{doctor.Name}</h2>
                    <p className="flex items-center text-gray-600 mb-3">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        {doctor.YearExperience} Years of Experience
                    </p>
                    <p className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-5 h-5 mr-2" />
                        {doctor.Address}
                    </p>
                    <p className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                        {doctor.appointments[0]?.Name || 'Speciality Unknown'}
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 mt-5">
                        {socialMediaList.map((item) => (
                            <a href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={item.icon}
                                    alt="social-media-icon"
                                    width={24}
                                    height={24}
                                    className="hover:scale-105 transition-transform duration-200"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Appointment Button */}
                    <BookAppointment doctor={doctor}/>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">About Me</h2>
                <p className="text-gray-600 leading-relaxed">{doctor.About || 'No additional information provided.'}</p>
            </div>
        </div>
    );
};

export default DoctorDetail;