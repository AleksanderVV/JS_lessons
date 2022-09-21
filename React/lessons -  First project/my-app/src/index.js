import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Button } from './App';
import styled from 'styled-components';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const text = 'Hello world!';

// const elem = (
//     <div>
//       <h2 className='text'>{text} {2+2}</h2>
//       <label htmlFor="input">Input: </label>
//       <input type="text" id='input'/>
//       <button tabIndex={0}>Click</button>
//     </div>
// );

const BigButton = styled(Button)`
  width: 245px;
  margin: 0 auto;
  text-align: center;
`;

root.render( 
  <StrictMode>
    <App/>
    <BigButton as="a">Send</BigButton>
  </StrictMode>
);

