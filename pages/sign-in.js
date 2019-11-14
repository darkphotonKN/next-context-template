import Layout from '../components/Layout';
import { useContext, useState } from 'react';

import UserContext from '../components/context/UserContext';
import { sign } from 'crypto';

export default function SignIn() {
  const { signIn } = useContext(UserContext);

  const [user, setUser] = useState(''); // user
  const [pass, setPass] = useState(''); // password

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(user, pass);
  };

  return (
    <Layout>
      <h3>Sign In</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={handleUserChange}
          value={user}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handlePassChange}
          value={pass}
        />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}
