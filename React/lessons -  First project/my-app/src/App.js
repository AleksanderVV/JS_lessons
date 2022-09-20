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
      text: '+++',
      position: ''
    }
    this.nextYear = this.nextYear.bind(this)
  }

  nextYear = () => {
    this.setState(state => ({
        years: state.years + 1
    }))
  }

  commitInputChanges = (e,color) => {
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;

    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname},
            age - {years}, 
            position - {position} </h1>
        <a href={link}>Link</a>
        <form>
          <span>Insert </span>
          <input type="text" onChange={(e) => {this.commitInputChanges(e, 'some color')}} />
        </form>
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