import react, { Fragment } from 'react';
import classes from './Title.module.scss';
function Title(props) {
    return (  
        <Fragment>
            <p className={classes.title} style={{
                fontFamily:'Poppins',
                fontSize:'40px'
            }}> {props.children} </p>
        </Fragment>
    );
}

export default Title;