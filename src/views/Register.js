import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Card from '../components/Card'
import {
	signUp,
	showAuthMessage,
	hideAuthMessage,
	showLoading
} from '../redux/actions'

class Register extends Component {

    state = {
        name: 'User1',
        email: 'u1@test.com',
        password: 'Darshan'
    }

    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
    }

    register() {
        this.props.showLoading()
        this.props.signUp({ email: this.state.email, password: this.state.password })
    }

    componentDidMount() {
        console.log(this.props.token)
    }

    render() {
        return (
            <div className="register">
                <div className="flex flex-center">
                    <Card title="Register">
                        <div className="form-input">
                            <label>Name</label>
                            <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
                        </div>
                        <div className="form-input">
                            <label>Email</label>
                            <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                        </div>
                        <div className="form-input">
                            <label>Password</label>
                            <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                        </div>
                        <button className="btn btn-primary" onClick={() => this.register()}>Register</button>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({auth}) => {
	const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signUp,
	showAuthMessage,
	hideAuthMessage,
	showLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register))
