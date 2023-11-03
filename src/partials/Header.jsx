import React,{useEffect} from 'react'
import  Search  from '../components/Search'
import { Logo } from '../components/Logo'
import  Button  from '../components/Button'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/Auth/AuthLogin'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserRedux } from '../redux/actions/Auth/GetUser'



export const Header = () => {
  const dispatch = useDispatch()
  
  const dataUser = () => {
    dispatch(GetUserRedux())
  }
  const Nama = useSelector((state) => state.user.user)
  console.log(Nama, "NAMA")
  useEffect(() => {
    dataUser()
  }, [])
  
  return (
    <>
    <div className='px-20 mt-4 mx-auto flex items-center justify-between fixed top-0 left-0 z-50 w-full'>
      <Logo></Logo>
      <Search></Search>
      <div className='flex'>
      <Link to='/'><Button onClick={logout} variant='Register'>Logout</Button></Link>
      <Link to='/'><Button variant='Register'>{Nama}</Button></Link>
      </div>
    </div>
    <div>
    </div>

    </>
  )
}
