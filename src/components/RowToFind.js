import React, {Component} from 'react';
import Square from './Square';
import './Game.css'

class RowToFind extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const {toFind}=this.props
        return(
            <div className="row">
                {toFind.map((item,i)=>{
                    return (
                        <Square
                        backgroundColor={item.color}
                        border={item.border}
                        text={''}                     
                        key={i}/>
                    )
                })}
            </div>
        )
    }
}

export default RowToFind