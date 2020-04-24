import React, { Component } from 'react';

// Config
import Head from 'next/head';
import Cookie from 'js-cookie';

// Helpers
import { dimensions, colors, fonts } from '../../styles/variables';

// Components
import Menu from './Menu';
import Footer from './Footer';
import Login from '../login/Login';

interface PageProps {
  children: React.ReactElement;
}

class Page extends Component<PageProps> {
  state = {
    loginOpened: false,
    error: false,
    userData: null,
  };

  componentDidMount() {
    if (Cookie.get('user_sid')) {
      fetch('/api/me', {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'POST',
        credentials: 'include',
      })
        .then(response => response.json())
        .then(json => {
          if (!json.error && json.user) {
            this.setState({
              userData: json.user,
            });
          }
        });
    }
  }

  onLoginOpened = e => {
    e.preventDefault();
    this.setState({ loginOpened: true });
  };
  onLoginClosed = () => {
    this.setState({ loginOpened: false });
  };

  onUserLogin = (login: string, password: string) => {
    const data = {
      login,
      password,
    };

    fetch('/api/login', {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then(response => response.json())
      .then(json => {
        if (!json.error && json.user) {
          this.setState({ error: false, userData: json.user });
          this.onLoginClosed();
        } else {
          this.setState({ error: true, userData: null });
        }
      });
  };

  onUserLogout = e => {
    e.preventDefault();
    this.setState({
      userData: null,
    });

    fetch('/api/logout', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
      credentials: 'include',
    });
  };

  render() {
    const { children } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Oswald:400,500,700|Roboto:400,400i,500,500i,700,700i&amp;subset=latin-ext"
            rel="stylesheet"
          ></link>
        </Head>
        <Login
          loginOpened={this.state.loginOpened}
          onLoginClosed={this.onLoginClosed}
          onUserLogin={this.onUserLogin}
          error={this.state.error}
        />
        <>
          <Menu onLoginOpened={this.onLoginOpened} userData={this.state.userData} onUserLogout={this.onUserLogout} />
          {children}
          <Footer />
        </>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            font-family: ${fonts.default};
          }

          html,
          body {
            margin: 0;
            padding: 0;
            font-size: ${dimensions.fontSize.regular}px;
            color: ${colors.text.default};
            overflow-x: hidden;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${fonts.header};
            font-weight: 700;
            letter-spacing: 0.5px;
          }

          h1 {
            font-size: 2.4em;
          }

          h2 {
            font-size: 1.8em;
          }

          h3 {
            font-size: 1.4em;
          }

          p {
            line-height: 1.4;
          }

          button {
            outline: none;
          }
        `}</style>
      </>
    );
  }
}

export default Page;
