import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="nav" style={{backgroundColor:"yellow" ,color:"black",height:"40px"}}>
        <ul style={{display:"flex",flexDirection:"row",justifyContent:"space-between"  ,textDecoration:"none"}}>
            <li> <Link href={'/home'}>Home</Link></li>
            <li>
      <Link href={'/project'}>Projects</Link></li>
        </ul>
     
   
      </div>
    </>
  );
};

export default NavBar