import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux/es/exports'



import './index.css'
import MainRoute from './Routes/MainRoute'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
        <MainRoute />
      </Provider>
  </React.StrictMode>,
)
