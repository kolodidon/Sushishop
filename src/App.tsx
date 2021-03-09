import React, { useEffect } from 'react'
import { Route } from 'react-router'
import { useDispatch } from 'react-redux'

import './scss/app.scss'

import { Header } from './components'
import { Home, Cart } from './pages'
import { FetchSushiThunk } from './redux/sushiSlice'


const App: React.FC = () => {

  const dispatch = useDispatch()
  useEffect(() => { dispatch(FetchSushiThunk()) }, [dispatch])
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