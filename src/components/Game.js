import React, { Component } from 'react';
import './Game.css'
import RowToFind from './RowToFind';
import Combinaison from './Combinaison';
import Clavier from './Clavier';
import Tentative from './Tentative';



class Game extends Component {
    constructor(props) {
        super(props)
        this.case = 0
        this.state = {
            toFind: this.GenerateRowToFind(),
            combinaison: this.GenerateRowCombinaison(),
            tentatives: [],
        }
    }

    colors = ["OrangeRed", "RoyalBlue", "SeaGreen", "gold"]

    GenerateRowToFind = () => {
        const row = []
        for (let i = 0; i < 4; i++) {
            row.push({ color: this.colors[Math.floor(4 * Math.random())], border: '1px black solid' })
        }
        return row
    }

    GenerateRowCombinaison = () => {
        const row = []
        for (let i = 0; i < 4; i++) {
            row.push({ color: 'SeaShell ', border: '1px black solid' })
        }
        return row
    }

    changeColor = (newColor) => {
        let combClone = [...this.state.combinaison];
        let caseValue = { ...combClone[this.case], color: newColor };
        combClone[this.case] = caseValue;
        if (this.case === 3) {
            this.case = 0
            this.setState({
                tentatives: [...this.state.tentatives, combClone],
                combinaison: this.GenerateRowCombinaison()
            })
        } else {
            this.setState({ combinaison: combClone });
            this.case += 1;
        }
    }


    render() {
        const { tentatives } = this.state;
        return (
            <div>
                <RowToFind toFind={this.state.toFind} />
                {tentatives.map((item, i) => {
                    return <Tentative combinaison={item} key={i} />
                })}
                <Combinaison combinaison={this.state.combinaison} />
                <Clavier colors={this.colors} changeColor={this.changeColor} />
            </div>
        )
    }
}

export default Game