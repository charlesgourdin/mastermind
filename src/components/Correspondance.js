import React, {Component} from 'react';
import './Game.css'

class Correspondance extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){

        return(
            <div className='correspDiv'>
                <div className='point' style={{backgroundColor:this.props.valid[0]}}></div>
                <div className='point' style={{backgroundColor:this.props.valid[1]}}></div>
                <div className='point' style={{backgroundColor:this.props.valid[2]}}></div>
                <div className='point' style={{backgroundColor:this.props.valid[3]}}></div>
            </div>
        )
    }
}

export default Correspondance