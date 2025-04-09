import { Link } from "react-router-dom";
import { PersonSimpleBike } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-5 py-3'>
      <div className='container'>
        <Link to='/'>
          <h1 className='text-lg md:text-4xl font-bold flex gap-3'>
            <span className='hidden md:flex'>
              <PersonSimpleBike size={42} />
            </span>
            <span className='flex md:hidden'>
              <PersonSimpleBike size={25} />
            </span>
            WerkIT
          </h1>
        </Link>
      </div>
      <div className='flex gap-8 mr-6'>
        <Link to='/'>
          <p className='hidden text-sm md:flex md:text-2xl'>Home</p>
        </Link>
        <Link to='/about'>
          <p className='text-sm md:text-2xl'>About</p>
        </Link>
        <Link to='/programs'>
          <p className='text-sm md:text-2xl'>Programs</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
