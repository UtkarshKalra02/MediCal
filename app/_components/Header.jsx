'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const Header = () => {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/'
        }
    ]

    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10' >
                <Image src='/logo.png' alt='logo'
                    width={100} height={100} />

                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item) => (
                        <Link href={item.path} key={item.id}>
                            <li className='hover:text-red-400 cursor-pointer hover:scale-105 transition-all ease-in-out'>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            {user ? (
                <Popover>
                    <PopoverTrigger>
                        <Image src={user?.picture} alt='profile' width={50} height={50} className='rounded-full' />
                    </PopoverTrigger>
                    <PopoverContent className='w-44'>
                        <ul className='flex flex-col gap-2'>

                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>Profile</li>
                            <Link href={'/my-booking'} className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>My Booking</Link>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                                <LogoutLink>Logout</LogoutLink>
                            </li>
                        </ul>
                    </PopoverContent>
                </Popover>
            ) : (
                <LoginLink postLoginRedirectURL='/'>
                    <Button>Get Started</Button>
                </LoginLink>
            )}
        </div>
    )
}

export default Header;