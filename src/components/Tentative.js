import React, {Component} from 'react';
import Square from './Square';
import './Game.css'

class Tentative extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const {combinaison}=this.props
        return(
            <div className="row">
                {combinaison.map((item,i)=>{
                    return (
                        <Square
                        backgroundColor={item.color}
                        border={item.border}                      
                        key={i}/>
                    )
                })}
            </div>
        )
    }
}

export default Tentative