import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='bg-cyan-500 px-12 py-8 flex justify-between items-center'>
      <Logo />
      <Nav />
    </header>
  )
}
