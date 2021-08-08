import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const MainLayout = props => {
  return (
    <div>
      <Header {...props} />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
