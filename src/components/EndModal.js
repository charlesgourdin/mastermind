import React, {Component} from 'react';
import './Game.css'
import { Link } from 'react-router-dom';

class EndModal extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const {win, loose, attempt} = this.props
        return(
            <div className="endModal" style={{ display: (win || loose) ? 'flex' : 'none' }}>
                        <h2>{win ? 'You win!' : 'You loose... '}</h2>
                        <h4>{win ? `In ${7-attempt} attempt` : `Try again!`}</h4>
                        <Link to={"/"}><button className='buttonStyle'>Go to menu</button></Link>
            </div>
        )
    }
}

export default EndModal