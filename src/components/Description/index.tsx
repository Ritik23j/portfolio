import React from 'react';
import classes from './styles.module.scss';

const Description = React.memo(() => {
    return (
        <div className={classes.descriptionContainer}>
            <div className={classes.primaryText}>I code. I play. I read.</div>
            <div className={classes.secondaryText}>
                A bibliophile who loves travelling and exploring new things. 
                Currently working as a Software Engineer at
                AMDOCS.
            </div>
        </div>
    );
});

export default Description;
