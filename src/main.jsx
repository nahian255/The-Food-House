import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Provider from './authProvidr/Provider';

const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <div className=''>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
