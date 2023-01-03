import React from 'react'
import '../App.css'
import logo from './logo.png'
import LogoWrap from './LogoWrapper'

const Logo = () => {

   const imgStyle = {
      width:"68px",
      height:"68px"
   }
   const h3Style = {
      color:"#e8b38c"
   }

return (
   <LogoWrap>
      <img src={logo} style={imgStyle} alt="logo"/>
      <h2 style={h3Style}>Photo website</h2>
   </LogoWrap>
   )
}
export default Logo