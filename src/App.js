import './App.css';

import React from "react";

import Header from './Header';
import Tache from './Tache';
import Footer from './Footer'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      taches : JSON.parse(localStorage.getItem("tasks"))
    };
  }

  afficheTaches(){
    return this.state.taches.map((element , index) => <Tache key={index} texte={element.title} isChecked={element.isChecked} check={() => this.checkTache(index)} delete={() => this.deleteTache(index)} deplacementBas={() => this.deplacementBasTache(index)} deplacementHaut={() => this.deplacementHautTache(index)}/>);
  }

  setNumberOfChecked(){
    let nbTachesChecked = 0;
    this.state.taches.forEach(element => {
          if(element.isChecked) ++nbTachesChecked;
    });
    return nbTachesChecked
  }

  checkTache(i){
    let newTaches = this.state.taches.slice();
    newTaches[i].isChecked = !(newTaches[i].isChecked);
    this.setState({taches: newTaches})
  }

  deleteTache(i){
    let newTaches = this.state.taches.slice();
    newTaches.splice(i,1);
    this.setState({taches: newTaches})
  }

  ajouterTache(){
    let newTaches = this.state.taches.slice();
    newTaches.push({title: prompt(), isChecked: false});
    this.setState({taches: newTaches})
  }

  deplacementBasTache(i){
    if(i < this.state.taches.length-1){
      let newTaches = this.state.taches.slice();
      let tmp = newTaches[i];
      newTaches[i] = newTaches[i+1];
      newTaches[i+1] = tmp;
      this.setState({taches: newTaches})
    }
  }

  deplacementHautTache(i){
    console.log(i);
    if(i > 0){
      let newTaches = this.state.taches.slice();
      let tmp = newTaches[i];
      newTaches[i] = newTaches[i-1];
      newTaches[i-1] = tmp;
      this.setState({taches: newTaches})
    }
  }

  save(){
    localStorage.setItem('tasks',JSON.stringify(this.state.taches));
    this.setState({taches : JSON.parse(localStorage.getItem("tasks"))});
  }

  render(){
    return(
      <div>
        <Header nbTachesChecked={this.setNumberOfChecked()} nbTaches={this.state.taches.length} />
        <ul>{this.afficheTaches()}</ul>
        <Footer ajouter={() => this.ajouterTache()} save={() => this.save()}/>
      </div>
    );
  }
}

export default App;
