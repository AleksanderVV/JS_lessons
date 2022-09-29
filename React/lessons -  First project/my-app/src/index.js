import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Button } from './App';
import styled from 'styled-components';
import ContainerExample from './ bootstrapTest'


const root = ReactDOM.createRoot(document.getElementById('root'));

const BigButton = styled(Button)`
  width: 245px;
  margin: 0 auto;
  text-align: center;
`;

root.render( 
  <StrictMode>
    <App/>
    <BigButton as="a">Send</BigButton>
    <ContainerExample/>
  </StrictMode>
);

