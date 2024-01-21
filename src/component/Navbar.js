import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[8vh] bg-[#262626] flex items-center justify-start px-[1vw]">
        <img src={require('../46657971_640x640.avif')} className="w-[6vh] h-[6vh] object-cover py-1 "/>
        <div className="text-white px-2">Welcome</div> 
      </div>
  )
}

export default Navbar
