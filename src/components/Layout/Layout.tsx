import React, { FC, ReactChild, ReactNode } from 'react';
import Header from '../Header';

interface ILayout {
    children: ReactChild | ReactNode,
}

const Layout: FC<ILayout> = ({ children }: ILayout) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);

export default Layout;
