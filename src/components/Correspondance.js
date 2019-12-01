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
                <div className='point'></div>
                <div className='point'></div>
                <div className='point'></div>
                <div className='point'></div>
            </div>
        )
    }
}

export default Correspondance