'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

const CategorySearch = () => {

    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getCategoryList()
    }, [])

    const getCategoryList = () => {
        GlobalApi.getCategory().then((resp => {
            console.log(resp.data.data);
            setCategoryList(resp.data.data);
        }))
    }

    return (
        <div className='mb-10 items-center flex flex-col gap-4 px-5'>
            <h2 className='font-bold text-4xl'>Search <span className='text-blue-600'>Doctors</span></h2>
            <h2 className='text-gray-500 text-xl'>Search your Doctor and Book Appointment in one click</h2>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search..." />
                <Button type="submit"><Search className='h-4 w-4'>Search</Search></Button>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                {categoryList.length > 0 ? categoryList.map((item, index) => index < 6 && (
                    <Link
                        href={'/search/'+item.Name}
                        key={index}
                        className='flex flex-col text-center gap-2 items-center p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer'
                    >
                        <Image src={item.Icon.url} alt='icon'
                            width={60} height={60} />
                        <label className='text-blue-950 text-sm'>{item.Name}</label>
                    </Link>
                ))
                    :
                    [1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className='h-[130px] w-[130px] m-2 bg-slate-200 animate-pulse'>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategorySearch