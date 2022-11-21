import React from 'react'
import logo from '../assets/logo.png'

type Props = {}

export default function Logo({}: Props) {
  return (
    <>
      <a href='#'>
        <img src={logo} alt='' />
      </a>
    </>
  )
}
