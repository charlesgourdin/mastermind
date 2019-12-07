import React, { Component } from 'react';
import './Game.css'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (

            <div className='homePage'>
                <h2 style={{ color: 'white' }}>MASTERMIND</h2>
                <Link to={'/game'}><button className='buttonStyle'>Let's play !</button></Link>
                <p>by Charles Gourdin<br />2019</p>
            </div>

        )
    }
}

export default HomePage