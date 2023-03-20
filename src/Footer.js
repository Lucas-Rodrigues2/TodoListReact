import React from "react";

class Footer extends React.Component{
    render() {   
       return (
            <div>
                <input type="text"></input>
                <button onClick={this.props.ajouter}>ajouter</button>
                <button onClick={this.props.save}>save</button>
            </div>
       );
    }
}

export default Footer