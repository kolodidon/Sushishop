import React, {useState, useEffect} from 'react'

import './scss/app.scss'

import { Header } from './components'
import { Home, Cart } from './pages'
import { FetchSushi, SushiType} from './Api'

import { Route } from 'react-router'

const App: React.FC = () => {
  const [sushi, setSushi] = useState<SushiType>()
  useEffect(() => {
    FetchSushi().then((data) => setSushi(data))
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path ='/' exact>
          <Home items={sushi}/>
        </Route>
        <Route path ='/cart' component={Cart}/>
      </div>
    </div>
  );
}

export default App;