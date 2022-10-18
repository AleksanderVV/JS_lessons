import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
// import MarvelService from './services/MarvelService';
import './style/style.scss';

// const marvelService = new MarvelService();

// marvelService.getAllCharacters().then(res => res.data.results.forEach((item) => {console.log(item.name)}));
// marvelService.getCharacter(1011052).then(res => console.log(res));

// for React v18
ReactDOM.createRoot(document.getElementById('root'))
        .render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );


// for React v17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

