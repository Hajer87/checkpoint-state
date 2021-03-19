//import React because it's a class based component
import React from "react";
//import style file
import "./App.css";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import image
import hajer from "./images/hajer.jpg";
// import components
import Nav from "./components/Nav";
import Person from "./components/Person";

class App extends React.Component {
  //state:
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Hajer Benzarti",
        bio: "née le 10 Septembre 1987",
        profession: "developpeur Full stack",
        imgSrc: "./images/hajer.jpg",
      },
      show: false,
     time: new Date
      
    };
  }



  componentDidMount() {
    // it runs after the component output has been rendered to the DOM
    this.clockID = setInterval(
        () => this.tick(),
        1000
    );
}

componentWillUnmount() {
    // it runs right before React unmounts and destroys our component
    clearInterval(this.clockID);
}

tick = () => {
    this.setState({
        time: new Date()
    })
}
  // handleShow onClick show:true
  handleShow = () => this.setState({show:false});
  //handlePerson on click show person profile
  handlePerson = () => {
    this.setState({ ...this.state, show: !this.state.show });
  };
    


   render() {
    return (
      <div className="App">
        <Nav />
        
        <button type="boutton" onClick={this.handlePerson}>
          Show me !
        </button>
        {this.state.show ? 
        <h1> <Person fullName={this.state.person.fullName} bio={this.state.person.bio} profession={this.state.person.profession}/>   
       {this.state.time.toLocaleTimeString()}</h1>: null}        
      </div>
    );}
  }


export default App;
