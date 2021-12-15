import React from 'react';

const Friend = (props) => {
    const {friend} = props;
    const {name, age, email} = friend;

    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{age}</p>
            </div>
        </div>
    );
};

export default Friend;






































