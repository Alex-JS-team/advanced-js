import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function UserList(props) {
    return (
        <ul style={styles.ul}> 
            {props.users.map( (user, index) => {
                return <UserItem 
                        user={user} 
                        key={user.id} 
                        index={index}
                        completed={props.completed}
                        onChange={props.onToggle} 
                    />
                })
            }
        </ul>
    )
}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default UserList;