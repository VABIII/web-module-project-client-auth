import React from 'react';

const Friend = (props) => {
    const {friend} = props;
    const {name, age} = friend
    // console.log(friend)

    return (
        <div>

            <div>
                <h2>{name}</h2>
                <p>{age}</p>
            </div>
        </div>
    );
};

export default Friend;






































