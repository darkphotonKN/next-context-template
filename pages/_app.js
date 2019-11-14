import App from 'next/App';
import Router from 'next/Router';

import UserContext from '../components/context/UserContext';

export default class MyApp extends App {
  state = {
    user: null
  };

  componentDidMount() {
    const user = localStorage.getItem('app-user');
    if (user) {
      this.setState({
        user
      });
    } else {
      // Router.push('/signin');
    }
  }

  signIn = (username, password) => {
    localStorage.setItem('app-user', username);

    this.setState(
      {
        user: username
      },
      () => Router.push('/')
    );
  };

  signOut = () => {
    localStorage.removeItem('app-user');
    this.setState(
      {
        user: null
      },
      () => Router.push('/sign-in')
    );
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      // Providing user
      <UserContext.Provider
        value={{
          user: this.state.user,
          signIn: this.signIn,
          signOut: this.signOut
        }}
      >
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}
