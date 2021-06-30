import picture from './picture.gif';
import './App.css';
import React,{Component} from "react";
/*
  }*/
  class App extends React.Component {
    state = {
      Person:{
      fullname: 'Toumi Yassine',
      bio:'Creative ,Fast self learner and Maintains an end user focus',
       imgSrc:'',
       profession:'React Developer'},
      show: false
    };
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
    handleShowPerson = () => {
      this.setState({
        ...this.state,
        show: !this.state.show
      });
    };
  
    render() {
      return (
        <>
          {this.state.show && (
            <div>
              <h1>{this.state.Person.fullname}</h1>
              <h1>{this.state.Person.bio}</h1>
              < img src={picture} alt="profil image" />
              <h1>{this.state.Person.profession}</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      
            </div>
          )}
  
          <button onClick={this.handleShowPerson}>click here</button>
        </>
      );
    }
  }
export default App;
