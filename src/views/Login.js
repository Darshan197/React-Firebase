import { useState } from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import {
	signIn,
	showLoading
} from '../redux/actions'

const Login = (props) => {
    const [user, setUser] = useState({email: 'u1@test.com', password: 'Darshan'})
    const login = () => {
        props.showLoading()
        props.signIn({ email: user.email, password: user.password })
    }
    return (
            <div className="login">
                <div className="flex flex-center">
                    <Card title="Login">
                    <div className="form-input">
                            <label>Email</label>
                            <input type="text" value={user.email} onChange={(e) => setUser({email: e.target.value})} />
                        </div>
                        <div className="form-input">
                            <label>Password</label>
                            <input type="password" value={user.password} onChange={(e) => setUser({password: e.target.value})} />
                        </div>
                        <button className="btn btn-primary" onClick={() => login()}>Login</button>
                    </Card>
                </div>
            </div>
        )
}

const mapStateToProps = ({auth}) => {
	const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signIn,
	showLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)