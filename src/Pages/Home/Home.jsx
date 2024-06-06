import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Feed from '../../Components/Feed'


const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Feed/>
    </div>
  )
}

export default Home