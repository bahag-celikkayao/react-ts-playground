import React, {FC, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';

const MainNavigation: FC = () =>{

  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <Link to='/'>Manage Taks</Link>
          </li>
          <li>
            <Link to='/statistics'>Statistics</Link>
          </li>
        </ul>
      </nav>
    </div>
  );

}

export default MainNavigation