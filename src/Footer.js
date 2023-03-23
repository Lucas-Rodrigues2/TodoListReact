import React from "react";

class Footer extends React.Component{
    render() {   
       return (
            <div>
                <button onClick={this.props.rechercher}>rechercher</button>
                <button onClick={this.props.ajouter}>ajouter</button>
                <button onClick={this.props.sauvegarder}>sauvegarder</button>
            </div>
       );
    }
}

export default Footer