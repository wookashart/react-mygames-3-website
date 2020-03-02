import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <Link href="/login">
                <a>Zaloguj się</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a>Zarejestruj się</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/games">
                <a>Gry</a>
              </Link>
            </li>
            <li>
              <Link href="/articles">
                <a>Recenzje</a>
              </Link>
            </li>
            <li>
              <Link href="/helpers">
                <a>Poradniki</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Kontakt</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{``}</style>
    </>
  );
};

export default Menu;
