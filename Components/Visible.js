import React, {PureComponent} from 'react';

export default class Visible extends PureComponent {


    render () {
       return ( 
        <p> {this.props.vep} </p>
        )
    }
};
