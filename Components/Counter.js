import React, {PureComponent} from 'react';
import Button from "./Button";

export default class Counter extends PureComponent {
    
state = {
    count: 0  
}    
minus = () => {
    if (this.state.count < -9) {
        alert(" Минимальное число -10");
    } else {
    this.setState({count: this.state.count - 1});
    }
};
plus = () => {
    if (this.state.count > 9) {
        alert(" Максимальное число 10");
    } else {
    this.setState({count: this.state.count + 1});
    }
};

    render () {
        return (
            <div>
                <Button value="-" funct = {this.minus}/>
                <p>{this.state.count}</p>
                <Button value="+" funct = {this.plus}/>
            </div>
        )
    }
}