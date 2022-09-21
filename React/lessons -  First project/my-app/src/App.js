// import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
import styled from 'styled-components';

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

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
  a {
    display: block;
    color: ${props => props.active ? 'orange' : 'black'};
  }
`;

const HeaderEmpItem = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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
      <EmpItem active>
        <Button onClick={this.nextYear}>{this.state.text}</Button>
        <HeaderEmpItem>My name is {name}, surname - {surname},
            age - {years}, 
            position - {position} </HeaderEmpItem>
        <a href={link}>Link</a>
        <form>
          <span>Insert </span>
          <input type="text" onChange={(e) => {this.commitInputChanges(e, 'some color')}} />
        </form>
      </EmpItem>
    )
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
    return ( 
      <Wrapper>
        {/* <Header/>
        <Field/>
        <Btn/> */}
        <WhoAmI name= 'John' surname="Smith" link="facebook.com"/>
        <WhoAmI name= 'Alex' surname="SmithY" link="facebook.com"/>
      </Wrapper>
    );
}

export default App;