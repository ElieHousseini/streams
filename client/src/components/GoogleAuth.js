import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => { // loading the lib
            window.gapi.client.init({ //initinialising the lib (async req)
                clientId: '327485833497-qscpmagj27se25j17v6pkjleedbb22dh.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => { // runs once all our GAPI Lib is ready to go
                this.auth = window.gapi.auth2.getAuthInstance() //reference for the auth lib object
                //updating component level state with: if the client is signed in or not
                this.onAuthChange(this.auth.isSignedIn.get())
                //So when I sign out or in, I do not need to refresh the page
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className='ui red google button'>
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className='ui red google button'>
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}


export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth)