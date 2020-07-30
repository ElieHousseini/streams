import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StreamCreate from './Streams/StreamCreate'
import StreamEdit from './Streams/StreamEdit'
import StreamDelete from './Streams/StreamDelete'
import StreamList from './Streams/StreamList'
import StreamShow from './Streams/StreamShow'
import Header from './Header'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    {/* Header inside instead of outside because:  */}
                    {/* You can't include a Link tag outside Router Element*/}
                    <Header />
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit' exact component={StreamEdit} />
                    <Route path='/streams/delete' exact component={StreamDelete} />
                    <Route path='/Streams/show' exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App