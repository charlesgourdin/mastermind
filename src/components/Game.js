import React, { Component } from 'react';
import './Game.css'
import RowToFind from './RowToFind';
import Combinaison from './Combinaison';
import Clavier from './Clavier';
import Tentative from './Tentative';
import Correspondance from './Correspondance';
import RowToHide from './RowToHide';



class Game extends Component {
    constructor(props) {
        super(props)
        this.case = 0
        this.attempt = 7
        this.state = {
            toFind: this.GenerateRowToFind(),
            combinaison: this.GenerateRowCombinaison(),
            tentatives: [],
            rest: this.generateRestAttempt(this.attempt),
            endGame : false
        }
    }

    colors = ["#de2c00", "#008dde", "#00ab53", "#ffcc00"]

    GenerateRowToFind = () => {
        const row = []
        for (let i = 0; i < 4; i++) {
            row.push({ color: this.colors[Math.floor(4 * Math.random())], border: '2px white solid' })
        }
        return row

    }

    GenerateRowCombinaison = () => {
        const row = []
        for (let i = 0; i < 4; i++) {
            row.push({ color: 'SeaShell ', border: '2px white solid' })
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
        } else {
            this.setState({ combinaison: combClone });
            this.case += 1;
        }
    }

    verifCorresp = (comb) => {

        let colorCom = comb.map(item => { return item.color })
        let colorFin = this.state.toFind.map(item => { return item.color })
        let validTab = [null, null, null, null]
        let compteVerif = 0

        //On check si une couleur est à la bonne place
        for (let i = 0; i < 4; i++) {
            if (colorFin[i] === colorCom[i]) {
                // console.log(`${i} est à la bonne place`)
                //Si oui, on change les couleurs des cases concernés pour les sortir des verifs
                colorFin[i] = 'white'
                colorCom[i] = 'black'
                validTab[compteVerif] = 'red'
                compteVerif += 1
            }
        }

        if (compteVerif===4) {
            this.setState({endGame : true})
        }

        // Puis on check si une couleur est bien présente
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (colorFin[i] === colorCom[j]) {
                    // console.log(`${j} est de la bonne couleur`)
                    //Si oui, on change les couleurs des cases concernés pour les sortir des verifs
                    colorFin[i] = 'white'
                    colorCom[j] = 'black'
                    validTab[compteVerif] = 'white'
                    compteVerif += 1
                }
            }
        }

        this.attempt -= 1

        this.setState({
            tentatives: [...this.state.tentatives, { color: comb, validation: validTab }],
            combinaison: this.GenerateRowCombinaison(),
            rest : this.generateRestAttempt(this.attempt)
        }, )

        //Tentatives pour garder les essais, avec color = couleur du test et validation = résultat obtenu

        console.log(colorFin, colorCom, validTab)

    }

    generateRestAttempt = (nb) => {

        const toReturn = []

        for (let i = 0; i < nb; i++) {
            toReturn.push(this.GenerateRowCombinaison())
        }

        return toReturn
    }


    render() {
        const { tentatives, rest, endGame } = this.state;
        return (
            <div className='gameBoard'>
                <div className='toFind'>
                    <div className = "soluceOff" style={{display : !endGame ? 'flex' : 'none'}}>
                    <RowToHide toFind={this.state.toFind} />
                    <Correspondance valid={['rgb(1,0,0,0)', 'rgb(1,0,0,0)', 'rgb(1,0,0,0)', 'rgb(1,0,0,0)']} />
                    </div>
                    <div className = "soluceOn" style={{display : endGame ? 'flex' : 'none'}}>
                    <RowToFind toFind={this.state.toFind} />
                    <Correspondance valid={['rgb(1,0,0,0)', 'rgb(1,0,0,0)', 'rgb(1,0,0,0)', 'rgb(1,0,0,0)']} />
                    </div>
                </div>
                <div className='tryBoard'>
                    {tentatives.map((item, i) => {
                        return (<div className='result' key={i}>
                            <Tentative combinaison={item.color} key={'attempt' + i} />
                            <Correspondance key={'corresp' + i} valid={item.validation} />
                        </div>)
                    })}
                    <div className='attempt'>
                        <Combinaison combinaison={this.state.combinaison} />
                        <Correspondance valid={[null, null, null, null]} />
                    </div>
                    {rest.map((item, i) => {
                        return (<div className='result' key={i}>
                            <Tentative combinaison={item} key={'attempt' + i} />
                            <Correspondance key={'corresp' + i} valid={[null, null, null, null]} />
                        </div>)
                    })}
                </div>
                <div className='clavier'>
                    <Clavier colors={this.colors} changeColor={this.changeColor} />
                </div>
            </div>
        )
    }
}

export default Game