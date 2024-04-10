import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import store from "./redux/store"
import { GlobalContextWrapper } from "storeContext/context"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalContextWrapper>
        <App />
      </GlobalContextWrapper>
    </Provider>
  </React.StrictMode>
)
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
    
//     <GlobalContextWrapper>
//          <App />
//        </GlobalContextWrapper>
//   </React.StrictMode>,
//  document.getElementById('root')
// );