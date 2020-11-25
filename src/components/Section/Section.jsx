import React from 'react';
import './Section.css';

const Section = (props) => { 

    const {title, children} = props;

    return (

        <div>
            <h2>{title}</h2>
            <div>
                {children}
            </div>
        </div>
      
    );

};

export default Section;