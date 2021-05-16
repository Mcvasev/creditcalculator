import React, {PureComponent} from 'react';

export default class Button extends PureComponent {

    render () {
        return (
            <button onClick={this.props.funct}>{this.props.value}</button>            
        )
    }
}