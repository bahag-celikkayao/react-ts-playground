import React, {FC} from 'react';
import MainNavigation from './MainNavigation';

const Layout: FC = ({children}) =>{
  return (
    <div className="App">
      <MainNavigation />
      {children}
    </div>
  );
}

export default Layout