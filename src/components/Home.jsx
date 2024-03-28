import React from 'react'
import Navbar from './Navbar'

const Home = (props) => {
  return (
    <div>
      <Navbar/>
      <br />
      {props.child}
    </div>
  )
}

export default Home
