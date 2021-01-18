import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <h4>User Dashboard</h4>
            </div>
        )
    }
}

const mapStateToProps = ({auth}) => {
	const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect }
}

export default connect(mapStateToProps)(Dashboard)
