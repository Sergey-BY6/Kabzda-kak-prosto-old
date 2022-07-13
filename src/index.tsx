import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








// let a = {
//     name: "Sergey",
//     age: 10,
//     adress: {
//         sity: "Minsk",
//         countries: "Belarus"
//     }
// }


let users = [
    {
        name: "Sergey",
        age: 10,
        adress: {
            sity: "Minsk",
            countries: "Belarus"
        }
    },
    {
        name: "Victor",
        age: 13,
        adress: {
            sity: "Minsk",
            countries: "Belarus"
        }
    }
]

// let b: Array<string | number>;
// b = [1,1,1, "gg"]
// // b = 10
// // b = [true, false, true, false]


console.log (users[0].adress.countries)








