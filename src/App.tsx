import React from 'react'
import { Route } from 'react-router'

import './scss/app.scss'

import { Header } from './components'
import { Home, Cart } from './pages'
import { FetchSushiThunk } from './redux/sushiSlice'


const App: React.FC = () => {
  
  //@ts-ignore
  window.test = () => { dispatch(FetchSushiThunk()) }

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' exact component={Home} />
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App