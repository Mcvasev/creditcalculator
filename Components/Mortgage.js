import React, {PureComponent} from 'react';
import Calc from './Calc';



export default class Mortgage extends PureComponent {

    state = {
        sum: 0,
        stavka: 0,
        srok: 0,
        result: 0
    }    
    changeSumm = (e) => {
        this.setState({sum: e.target.value})
        console.log(this.state.sum)
        }    
    changeStavka = (e) => {
        this.setState({stavka: e.target.value})
        console.log(this.state.stavka)
        } 
    changeSrok = (e) => {
        this.setState({srok: e.target.value})
        console.log(this.state.srok)

        } 
    
    getResult = () => {
     let {sum, stavka, srok} = this.state
    if (sum && stavka && srok) {
        this.setState({result: (sum/100 * stavka * srok + sum) / (srok * 12)})
    }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state){
            this.getResult();
        }
    }
   
    

        
    render() {
        return (
            <div>
                <Calc value="Сумма" change={this.changeSumm}/>
                <Calc value="Ставка" change={this.changeStavka}/>
                <Calc value="Срок" change={this.changeSrok}/>
                <p>{this.state.result}</p>
            </div>
        )
    }
}