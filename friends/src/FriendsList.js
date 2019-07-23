import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from './actions'
import { delFriend } from './actions'

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div>
                <Link to='/newfriend'>Add a New Friend!</Link>
                {this.props.friends.map(friend => {
                    return (
                        <div className='friends' key={friend.id}>
                            <strong>{friend.name}</strong>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                            <p>ID: {friend.id}</p>
                            <button onClick={this.delFriend} id='{friend.id}'>Delete Friend</button>
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