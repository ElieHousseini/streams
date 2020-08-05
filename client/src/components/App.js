import React from 'react'
import { Router, Route } from 'react-router-dom'
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
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    {/* : is the wild card */}
                    {/* You can do  /streams/edit/:anything1/:anything2*/}
                    <Route path='/streams/edit/:id' exact component={StreamEdit} />
                    <Route path='/streams/delete' exact component={StreamDelete} />
                    <Route path='/Streams/show' exact component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}

export default App