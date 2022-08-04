import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
// import {Rating} from "./components/Raiting/Rating";
import {OnOff} from './components/UseStateOnOff/UseStateOnOff';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRaiting/UnControlledRating';
import {Rating} from './components/Raiting/Rating';
// import {OnOff} from './components/OnOff/OnOff';

function App () {
    console.log("App rendering")
    return (
        <div className={"App"}>
            <OnOff />

            <UnControlledAccordion titleValue={"Menu"} />
            <Accordion titleValue={"Menu"} collapsed={true}/>

            <UnControlledRating />
            <Rating value = {3} />

            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*/!*<Rating value = {3}/>*!/*/}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}
            {/*<OnOff  value={false} />*/}
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}
function PageTitle (props: PageTitlePropsType) {

    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

// function hallo () {
//     alert ("Hallo IT-KAMASUTRA")
// }



export default App;
