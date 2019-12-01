import React, { Component } from 'react';
import './Game.css'
import RowToFind from './RowToFind';
import Combinaison from './Combinaison';
import Clavier from './Clavier';
import Tentative from './Tentative';
import Correspondance from './Correspondance';



class Game extends Component {
    constructor(props) {
        super(props)
        this.case = 0
        this.state = {
            toFind: this.GenerateRowToFind(),
            combinaison: this.GenerateRowCombinaison(),
            tentatives: [],
            validation:[]
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
            this.verifCorresp(combClone)
            this.setState({
                tentatives: [...this.state.tentatives, combClone],
                combinaison: this.GenerateRowCombinaison()
            })
        } else {
            this.setState({ combinaison: combClone });
            this.case += 1;
        }
    }

    verifCorresp = (comb) => {

        let colorCom = comb.map(item => { return item.color })
        let colorFin = this.state.toFind.map(item => { return item.color })
        let validTab = [null, null, null, null]

        //On check si une couleur est à la bonne place
        for (let i = 0 ; i < 4 ; i++) {
            if (colorFin[i] === colorCom[i]) {
                // console.log(`${i} est à la bonne place`)
                //Si oui, on change les couleurs des cases concernés pour les sortir des verifs
                colorFin[i] = 'white'
                colorCom[i] = 'black'
                validTab[i] = 'black'
            }
        }

        // Puis on check si une couleur est bien présente
        for (let i = 0 ; i < 4 ; i++){
            for (let j = 0 ; j < 4 ; j++) {
                if (colorFin[i] === colorCom[j]) {
                    // console.log(`${j} est de la bonne couleur`)
                    //Si oui, on change les couleurs des cases concernés pour les sortir des verifs
                    colorFin[i] = 'white'
                    colorCom[j] = 'black'
                    validTab[j] = 'white'
                }
            }
        }
        
        this.setState({validation: validTab})

        console.log(colorFin, colorCom, validTab)

    }


    render() {
        const { tentatives } = this.state;
        return (
            <div className='gameBoard'>
                <div className='toFind'>
                    <RowToFind toFind={this.state.toFind} />
                </div>
                <div className='tryBoard'>
                    {tentatives.map((item, i) => {
                        return (<div className='result' key={i}>
                            <Tentative combinaison={item} key={'attempt' + i} />
                            <Correspondance key={'corresp' + i} />
                        </div>)
                    })}
                    <div className='attempt'>
                        <Combinaison combinaison={this.state.combinaison} />
                        <Correspondance />
                    </div>

                </div>
                <div className='clavier'>
                    <Clavier colors={this.colors} changeColor={this.changeColor} />
                </div>
            </div>
        )
    }
}

export default Game