import React from 'react'
import { Layout } from '../components/Layout';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Error, NotFound } from '../components/Error';

export const RouteList = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]