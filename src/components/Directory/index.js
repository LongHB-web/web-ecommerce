import React from 'react';
import { Link } from 'react-router-dom';
import Shop from './../../assets/shop.jpg';
import Customize from './../../assets/customize.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Customize})`
          }}
        >
          <Link to="customize">
            Customize
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Shop})`
          }}
        >
          <Link to="search">
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
