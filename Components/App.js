import React, {PureComponent} from 'react';
import Form from "./Form";
import Visible from "./Visible";


export default class App extends PureComponent {

    state = {
        str: "",
        }
    get = (e) => {
        this.setState({str: e.target.value})
        console.log(this.state.str)
    }   
    
    render (){
        return (
           <div> 
                < Form vep = {this.get}  />
                < Visible vep = {this.state.str} />
           </div> 
        )

    }
}