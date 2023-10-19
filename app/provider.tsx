"use client"

import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Navbar } from '@/components/navbar';

export default function ReduxProvider ({children} : {children: React.ReactNode}){
  return (
    <Provider store={store}>
      <Navbar />
      {children}
    </Provider>
  )
}