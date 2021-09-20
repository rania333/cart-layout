import react, { Fragment } from 'react';
import classes from './AdjacentHeader.module.scss';
import Icons from './Icons';
function AdjacentHeader(props) {
    return (  
        <Fragment>
            <div className={classes.header}>
            <p style={{fontSize:'20px', fontFamily:'Poppins'}}>{props.children} </p> 
            <Icons/>
            </div>
        </Fragment>
    );
}

export default AdjacentHeader;