import { Component } from "react";

class Header extends Component{
    render() {   
       return <h1>{this.props.nbTachesChecked} / {this.props.nbTaches}</h1>
    }
}

export default Header;