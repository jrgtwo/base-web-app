import React from 'react';
import { RouterProvider, Route, Link } from 'react-router-dom';
import { router } from '../router/index';
import { Header } from '../components/Header/index';
import { Footer } from '../components/Footer/index';

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
