import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='navBar'>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
