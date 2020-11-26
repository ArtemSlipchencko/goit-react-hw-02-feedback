import React from 'react';
import './Section.css';
import PropTypes from 'prop-types';

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

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
};

export default Section;