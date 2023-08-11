'use client'

import React, { useState } from 'react'
import Button from './BtnPrimary';
import { ListBulletIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import ThemeButton from './ThemeButton';

export default function Navbar() {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (<>
    <div className='shadow-md w-full mb-3'>
      <div className='flex items-center justify-between md:px-9 px-6 py-2 md:py-3 bg-skin-on-fill'>

        <div className='font-bold text-2xl cursor-pointer flex items-center '>
          <span className='text-3xl text-indigo-600 mr-1 text-center'>
            MAHA
          </span>
          Exams
        </div>

        <ThemeButton />

        <div onClick={() => setOpen(!open)} className='w-9 space-y-2 cursor-pointer md:hidden'>
          {open ? <LockClosedIcon /> : <ListBulletIcon />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static h-fit left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-skin-on-fill ${open ? 'top-16 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <p href="/" className='duration-500'>{link.name}</p>
              </li>
            ))
          }
          <Button>Get Started</Button>
        </ul>

      </div>
    </div>
  </>)
}
