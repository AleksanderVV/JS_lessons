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
function WhoAmI ({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>Link</a>
    </div>
  )
}

function App() {
    return ( 
      <div className = "App" >
        <Header/>
        <Field/>
        <Btn/>
        <WhoAmI name={() => {return 'John'}} surname="Smith" link="facebook.com"/>
        <WhoAmI name={() => {return 'John'}} surname="SmithY" link="facebook.com"/>
      </div>
    );
}

export default App;