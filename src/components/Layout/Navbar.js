import React from 'react'
import { Link } from 'react-router-dom'
// import SigninLinks from './SigninLinks'
import SignedInLinks from './SigninLinks'
// import SignOutLinks from './SignoutLinks'
import { connect } from 'react-redux'
import SignedOutLinks from './SignoutLinks'

const Navbar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)