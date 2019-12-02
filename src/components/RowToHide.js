import React, {Component} from 'react';
import Square from './Square';
import './Game.css'

class RowToHide extends Component {
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
                        backgroundColor={'#010327'}
                        border={item.border}
                        text={"?"}                      
                        key={i}/>
                    )
                })}
            </div>
        )
    }
}

export default RowToHide