import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from './actions'

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                        <div className='friends' key={friend.id}>
                            <strong>{friend.name}</strong>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(
    mapStateToProps,
    { getData }
)(FriendsList)