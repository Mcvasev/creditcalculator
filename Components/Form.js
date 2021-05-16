import React, {PureComponent} from 'react';


export default class Form extends PureComponent {


    render () {
        return (
    <input type="text" onChange={(e) => this.props.vep(e)} />
        )
    }
}
