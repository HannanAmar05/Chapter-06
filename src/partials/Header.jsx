import React from 'react'
import  Search  from '../components/Search'
import { Logo } from '../components/Logo'
import  Button  from '../components/Button'



export const Header = () => {
  return (
    <>
    <div className='px-20 mt-4 mx-auto flex items-center justify-between fixed top-0 left-0 z-50 w-full'>
      <Logo></Logo>
      <Search></Search>
      <div className='flex'>
      <Button variant='Login'>Login</Button>
      <Button variant='Register'>Register</Button>
      </div>
    </div>
    <div>
    </div>

    </>
  )
}
