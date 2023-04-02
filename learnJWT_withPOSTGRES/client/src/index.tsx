import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store/store';
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';

interface State {
  store: Store,
} 

const store = new Store();

export const Context = createContext<State>({
  store
})


// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);


// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// ReactDOM.render(
//   <Context.Provider value={{store}}>
//       <App />
//   </Context.Provider>,

//   document.getElementById('root')
// );