import React from "react";

class Tache extends React.Component{
    render(){
        return(
            <li>
                <input type="checkbox" onChange={this.props.check} checked={this.props.checked}></input>
                {this.props["texte"]}
                <button onClick={this.props.delete}>supprimer</button>
                <button onClick={this.props.deplacementHaut}>↑</button>
                <button onClick={this.props.deplacementBas}>↓</button>
            </li>
        );
    }
}

export default Tache;