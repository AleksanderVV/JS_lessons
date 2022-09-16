// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const Header = () => {
  return <h2>Hello</h2>
}

// const Field = () => {
//   return <input 
//             type="text" 
//             placeholder='Type here' />
// }

class Field extends Component {
  render() {
    const holder = 'Type here';

    return <input 
              type="text" 
              placeholder={holder}/>
  }
}

function Btn() {
  const text = 'Log in',
        logged = false;

  // const res = () => {
  //   return 'Log in';
  // }
  // return <button>{res()}</button>

  return <button>{logged ? 'Enter' : text}</button>
}

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++'
    }
  }

  nextYear = () => {
    this.setState(state => ({
        years: state.years + 1
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>Link</a>
      </div>
    )
  }
}

function App() {
    return ( 
      <div className = "App" >
        {/* <Header/>
        <Field/>
        <Btn/> */}
        <WhoAmI name= 'John' surname="Smith" link="facebook.com"/>
        <WhoAmI name= 'Alex' surname="SmithY" link="facebook.com"/>
      </div>
    );
}

export default App;