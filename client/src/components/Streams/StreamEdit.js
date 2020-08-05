import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'
// previously: it was a function
// we refactored into class based components
// so we can use componentDidMount() lifecycle method
class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    //formValues: set of changes that we want to make to the form
    //We will push it to the API
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        console.log(this.props);
        if (!this.props.stream)
            return <div>Loading</div>
        return (
            <div>
                <h3>Edit a Stream</h3>
                {/* returning only the changed properties */}
                {
                    /* 
                        Example to see how _.pick works:
                        const profile = {
                            name: 'Sam',
                            age: 18,
                            favoriteColor: 'green'
                        }
                        _.pick(profile, 'name', 'age')
                        output => {"name": "Sam", "age": 18}
                    */
                }
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}
// State: all the states from the redux store
// ownProps: props object that shows up in our react component
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)