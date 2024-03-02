import React from 'react'
import { Link } from 'react-router-dom';

export function MainNav() {

  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/about/asdf'}>Bad Link</Link>
    </nav >
  );
}