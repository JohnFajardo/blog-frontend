import React, {Component} from 'react';
//import logo from './logo.svg';
// import BsTest from "./components/BsTest"
import MainContainer from './components/MainContainer';
import Stories from './components/Stories';
import StoryComponent from './components/StoryComponent';
import Story from './components/Story';
import { Switch, Route, withRouter } from 'react-router-dom'
import {Link} from "react-router-dom"

function App() {
  return (
          <>
            <div className="container header-image">
                <h1 className="blog-title pt-5"><Link to={'/'}>Ayy LMAO</Link></h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pr-0 pl-0">
                      <Switch>
                        <Route exact path="/stories/:id/" render={(routeProps) => (<Story {...routeProps} />)} />
                        <Route path={'/'} component={MainContainer} />
                      </Switch>
                    </div>
                    
                </div>
            </div>
          </>
  )
}

export default App;