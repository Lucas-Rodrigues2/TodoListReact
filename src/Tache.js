import React from "react";

class Tache extends React.Component{
    render(){
        if(this.props["isChecked"]){
            return(
                <li>
                    <input type="checkbox" onClick={this.props.check} defaultChecked></input>
                    {this.props["texte"]}
                    <button onClick={this.props.delete}>supprimer</button>
                    <button onClick={this.props.deplacementHaut}>↑</button>
                    <button onClick={this.props.deplacementBas}>↓</button>
                </li>
            );
        }
        else{
            return(
                <li>
                    <input type="checkbox" onClick={this.props.check}></input>
                    {this.props["texte"]}
                    <button onClick={this.props.delete}>supprimer</button>
                    <button onClick={this.props.deplacementHaut}>↑</button>
                    <button onClick={this.props.deplacementBas}>↓</button>
                </li>
            );
        }
    }
}

export default Tache;