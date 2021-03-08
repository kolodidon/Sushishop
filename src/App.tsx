import React, { useEffect } from 'react'
import { Route } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import './scss/app.scss'

import { Header } from './components'
import { Home, Cart } from './pages'
import { FetchSushiThunk, sushiSelector, SushiStateType } from './redux/sushiSlice'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const { items, isLoading, error }: SushiStateType = useSelector(sushiSelector)
  useEffect(() => { dispatch(FetchSushiThunk()) }, [dispatch])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' exact>
          <Home items={items} isLoading={isLoading} error={error} />
        </Route>
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App