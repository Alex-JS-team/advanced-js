import React from 'react';
import PropTypes from 'prop-types';

function UserItem({user, index, onChange}) {
    const classes = [];

    if (user.completed) {
        classes.push('done');
    }

    return (
        <li style={{padding: '5px 0 5px 0'}} className={classes.join(' ')}>
            <input  type="checkbox" 
                    defaultChecked={user.completed} 
                    onChange={() => onChange(user.id)} />
            <strong style={{color: "blue"}}>{index + 1}</strong>
            <span className="key">Name:</span> {user.name}, 
            <span className="key">username:</span> {user.username}, 
            <span className="key">email:</span> {user.email}
        </li>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default UserItem;