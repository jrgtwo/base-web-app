import React from 'react'
import { Main } from "../components/Main"
import { About } from "../components/About"

export enum Route {
  home,
  about,
  error
};

const paths = {
  [Route.home]: '/',
  [Route.about]: '/about'
};


export const elements = {
  [Route.home]: Main,
  [Route.about]: About,
  [Route.error]: () => (<><h1>Yikes an error</h1></>)
};



export const browserRouterConfig = [
  {
    path: paths[Route.home],
    element: elements[Route.home](),
    errorElement: elements[Route.error](),
  },
  {
    path: paths[Route.about],
    element: elements[Route.about](),
    errorElement: elements[Route.error](),
  }
]