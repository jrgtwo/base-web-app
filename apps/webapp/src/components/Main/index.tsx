import React from 'react';
import { Link } from 'react-router-dom'

export function Main() {
  return (
    <section>
      <h3>This is my cool homepage, I really hope you like it :)</h3>
      <Link to={`/about`}>About page</Link>
    </section>
  );
}