import React from 'react'

import './scss/app.scss'

import { Header } from './components'
import { Home, Cart } from './pages'

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">

        <Home/>

      </div>
    </div>
  );
}

export default App;