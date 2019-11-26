import React, {Component} from 'react';


class Clavier extends Component {
    constructor(props){
        super(props)
        this.state={
            combinaison:this.props.combinaison

        }
    }

    render(){
        const{colors, changeColor}=this.props
        return(
            <div className="button">
                {colors.map((item, i)=>{
                    return (
                        <button style={{backgroundColor:item}} onClick={()=>changeColor(item)} key={i}></button>
                    )
                })}
            </div>
        )
    }
}

export default Clavier;