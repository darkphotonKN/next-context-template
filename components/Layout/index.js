import NavBar from '../NavBar';

const Layout = ({ children }) => {
  return (
    <div className="app-wrap">
      <NavBar />
      <div className="content-wrap">{children}</div>
      <style jsx>
        {`
          .app-wrap {
            font-size: 16px;
            font-family: 'Roboto';
          }

          .content-wrap {
            padding: 80px 80px;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
