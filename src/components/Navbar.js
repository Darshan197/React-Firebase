import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOut } from '../redux/actions'

const Navbar = (props) => {
    const logOut = () => {
        props.signOut()
    }
    return (
        <div className="nav">
            <Link to="/">
                <img className="logo" alt="alt" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53K9N8zHCT83D67nH228rxKxkS6RMojtknA&usqp=CAU" />
            </Link>
            <div className="flex flex-between">
                <div>

                </div>
                { (props.token) ? 
                <div>
                    <Link className="link" to="/dashboard">Dashboard</Link>
                    <button className="btn" onClick={() => logOut()}>Logout</button>
                </div> :
                <div>
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link" to="/register">Register</Link>
                </div> }
            </div>
        </div>
    )
}

const mapStateToProps = ({auth}) => {
    const { token } = auth
    return { token }
}

const mapDispatchToProps = { signOut }

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
