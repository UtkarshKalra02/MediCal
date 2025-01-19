import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-2xl font-bold text-black sm:text-3xl">
                                Find and Book 
                                <span className='text-blue-600'> Appointment</span> with your Favourite 
                                <span className='text-blue-600'> Doctors</span>
                            </h2>

                            <p className="mt-4 text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                                sequi.
                            </p>
                        </div>
                        <div className='items-center mt-10'>
                            <Button>Explore Now</Button>
                            </div>
                    </div>

                    <div>
                        <Image src='/doctor.jpg' alt='image' width={800} height={800}
                        className='rounded-3xl'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero