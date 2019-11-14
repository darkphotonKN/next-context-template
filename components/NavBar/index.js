import Link from 'next/link';
import { useContext } from 'react'; // to access the global context data

import UserContext from '../../components/context/UserContext';

const NavBar = () => {
  // accessing the global context state and functions
  const { user, signOut } = useContext(UserContext);

  console.log('Global Context User:', user);

  return (
    <nav>
      <ul className="nav-list">
        {user ? <li className="list-item">Welcome back, {user}</li> : null}
        <li className="list-item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li className="list-item">
          <Link href="/page2">
            <a>Page 2</a>
          </Link>
        </li>
        <li className="list-item">
          <Link href="/page3">
            <a>Page 3</a>
          </Link>
        </li>
        <li className="list-item">
          <Link href="/page4">
            <a>Page 4</a>
          </Link>
        </li>

        <li className="list-item auth">
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        </li>

        <li className="list-item auth">
          <a onClick={signOut}>Sign Out</a>
        </li>
      </ul>

      <style jsx>{`
        nav {
          float: right;
        }

        nav ul.nav-list {
          font-size: 18px;
          font-weight: 400;
        }

        nav ul.nav-list li.list-item {
          display: inline-block;
          margin: 0 12px;
        }

        nav ul.nav-list li.list-item a {
          color: #84817a;
          text-decoration: none;
          transition: 200ms ease-in-out;
        }

        nav ul.nav0-list li.list-item a:hover {
          color: #cc8e35;
        }

        nav ul.nav-list li.list-item.auth a {
          color: #0191b4;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
