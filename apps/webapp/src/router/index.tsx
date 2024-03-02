import React from 'react';
import { RouteList } from '../constants/routes'
import { useRoutes } from 'react-router-dom'

export function Router() {

  return useRoutes(RouteList);
}
