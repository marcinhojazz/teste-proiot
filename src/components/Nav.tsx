import React from 'react'

type Props = {
  menuOpen: any
}

const list = [
  'link 1',
  'link 2',
  'link 3'
]

const Nav = ({menuOpen}: Props) => {
  let Links = [
    { name: 'Home', link: '/', icon: '', },
    { name: 'Chart Line', link: '/', icon: '', },
    { name: 'Temperature', link: '/', icon: '', },
    { name: 'Other', link: '/', icon: '', }
  ]
  return (
    <>
      <ul className={`bg-[#005ac9] md:flex sm:items-center md:items-center pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${menuOpen}`}>
        {
          Links.map((link) => (
            <li key={link.name} className='sm:ml-8 md:ml-8 text-xl sm:my-0 my-7 border'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-300 ease-in-out'>{link.name}</a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Nav
