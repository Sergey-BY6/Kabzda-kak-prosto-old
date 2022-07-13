import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Raiting/Rating";

function App () {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            {/*<Rating value = {3}/>*/}
            <Accordion titleValue={"Menu"} collapsedMenu={true}/>
            <Accordion titleValue={"Users"} collapsedMenu={false}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
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
