import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import StreamCreate from './Streams/StreamCreate'
import StreamEdit from './Streams/StreamEdit'
import StreamDelete from './Streams/StreamDelete'
import StreamList from './Streams/StreamList'
import StreamShow from './Streams/StreamShow'
import Header from './Header'
import history from '../history'

const App = () => {
    return (
        <div className='container'>
            <Router history={history}>
                <div>
                    {/* Header inside instead of outside because:  */}
                    {/* You can't include a Link tag outside Router Element*/}
                    <Header />
                    {/* Switch: only show the first matching path, not all of them */}
                    <Switch>
                        <Route path='/' exact component={StreamList} />
                        <Route path='/streams/new' exact component={StreamCreate} />
                        {/* : is the wildcard */}
                        {/* You can do  /streams/edit/:anything1/:anything2*/}
                        <Route path='/streams/edit/:id' exact component={StreamEdit} />
                        <Route path='/streams/delete/:id' exact component={StreamDelete} />
                        <Route path='/Streams/:id' exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App