import logo from './logo.svg';
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

function App() {
    return ( 
      <div className = "App" >
        <Header/>
        <Field/>
        <Btn/>
      </div>
    );
}

export default App;