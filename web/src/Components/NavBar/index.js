import React from 'react';

import Link from 'next/link';

function NavBar(props) {
  return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href={'/'}>
            <a className="navbar-item">
              <h1>Doctors</h1>
            </a>
          </Link>
          <Link href={'/new'}>
              <a className="navbar-item">
                Novo Medico
              </a>
          </Link>
        </div>
      </nav>
  );
}

export default NavBar;