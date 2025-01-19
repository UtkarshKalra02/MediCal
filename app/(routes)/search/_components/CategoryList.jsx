'use client'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_utils/GlobalApi'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);
    const params = usePathname();
    const category = decodeURIComponent(params.split('/')[2]); // Decode the URL parameter to handle spaces

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
        <div className='h-screen mt-5 flex flex-col'>
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className="overflow-visible">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {categoryList && categoryList.map((item, index) => (
                            <CommandItem key={index}>
                                <Link 
                                    href={`/search/${encodeURIComponent(item.Name)}`} // Ensure URL-safe encoding
                                    className={`p-2 flex gap-2 text-[12px] text-blue-600
                                    rounded-md cursor-pointer w-full items-center
                                    ${category === item.Name ? 'bg-blue-100' : 'hover:bg-gray-100'}`}>
                                    <Image src={item.Icon.url} width={25} height={25} alt='image' />
                                    <label>{item.Name}</label>
                                </Link>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                </CommandList>
            </Command>
        </div>
    )
}

export default CategoryList