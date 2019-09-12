import React from 'react';
import Story from './components/Story';
import Edit from './components/Edit';
import MainContainer from './components/MainContainer';
import New from './components/New';
import { Switch, Route } from 'react-router-dom'
import {Link} from "react-router-dom"

function App() {
  return (
          <>
            <div className="container header-image">
                <h1 className="blog-title pt-5"><Link to={'/'}>John's blog</Link></h1>
                <p><a href="/stories/new">New post</a></p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pr-0 pl-0">
                      <Switch>
                        <Route exact path="/stories/new" render={(routeProps) => (<New {...routeProps} />)} />
                        <Route exact path="/stories/:id/" render={(routeProps) => (<Story {...routeProps} />)} />
                        <Route exact path="/stories/:id/edit" render={(routeProps) => (<Edit {...routeProps} />)} />
                        <Route path={'/'} component={MainContainer} />
                      </Switch>
                    </div>
                    
                </div>
            </div>
          </>
  )
}

export default App;