import React from 'react';

const Notification = (props) => { 

    const {message} = props;

    return (
        <div>
            {message}
        </div>
    );

};

export default Notification;