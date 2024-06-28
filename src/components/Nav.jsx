import React from "react";
import { Link, NavLink } from "react-router-dom";


function Nav() {
  return (
    <>
      <nav className="flex justify-center items-center bg-zinc-300 font-semibold">
        <ul className="flex gap-10 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/more">more</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
