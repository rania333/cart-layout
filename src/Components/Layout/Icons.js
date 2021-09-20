import react, { Fragment } from 'react';
import classes from './Icons.module.scss';
import {BiCartAlt} from 'react-icons/bi';
import {GrDeliver} from 'react-icons/gr';
function Icons(props) {
    return (  
        <Fragment>
                {props.children}
                <div className={classes.icons}>
                    <span> <BiCartAlt/> </span>
                    <span className={classes.dliver}> <GrDeliver/> </span>
                </div>
        </Fragment>
    );
}

export default Icons;