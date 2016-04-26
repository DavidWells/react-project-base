import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import homePageContainer from './containers/HeroContainer'
import NotFoundPage from './components/NotFoundPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={homePageContainer} />
    {/* <Route path='about' component={additonalPage}/>*/}
    <Route path='*' component={NotFoundPage} />
  </Route>
)
