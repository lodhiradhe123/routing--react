import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="flex justify-center items-center bg-zinc-300 font-semibold p-3 text-2xl">
        <ul className="flex gap-10 ">
          <li>
            <NavLink style={(e)=>{
              return {
                color:e.isActive ? "red" : "",
                fontWeight: e.isActive?"bolder":""
              }
            }} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/more">
            {(e)=>{
              return  <span  className={[e.isActive ? "text-red-500":"",
                 e.isActive?"font-bolder":""

              ].join(" ")}>more</span>
              
            }}
            </NavLink>
          </li>
          <li>
            <NavLink className={(e)=>{
             
              return  [e.isActive?"text-red-500":"",e.isActive?"font-boler":""].join(" ");
              
            }} to="/about">about</NavLink>
          </li>
          
        </ul>
      </nav>
    </>
  );
}

export default Nav;
