import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MainNav } from '../Nav';

export type LayoutProps = React.PropsWithChildren<{}>

export function Layout(): React.ReactElement {
  return (
    <>
      <Header />
      <MainNav />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  )
}