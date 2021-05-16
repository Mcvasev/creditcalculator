import React, {PureComponent} from 'react';


export default class Calc extends PureComponent {

    render() {
        return (
            <div>
                <label>
                    {this.props.value}
                    <input type="number" onChange = {(e) => this.props.change(e)}/>
                </label>
            </div>
        );
    }

}