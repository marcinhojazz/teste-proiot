import React, { useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'

type Props = {}

const MenuOpen = `
  <svg className='h-12 w-12' data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 61.889H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 87.7H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z"/></svg>
`;

export default function Header({ }: Props) {

  let [open, setOpen] = useState(false)

  return (
    <header className='px-4 py-6 text-white shadow-md w-full relative top-0 left-0 bg-[#005ac9] z-50'>
      <div className='lg:flex md:flex sm:flexx justify-between items-center'>
        <Logo />
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? 'close' : 'open'}
        </div>
        <Nav menuOpen={`${open ? 'top-20' : 'top-[-490px]'}`} />
      </div>
    </header>
  )
}
