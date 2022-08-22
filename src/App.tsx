import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from './components/Raiting/Rating';
import {UncUseStateOnOff} from './components/UncUseStateOnOff/UncUseStateOnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';





function App () {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState <RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState <boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean> (false)

    return (
        <div className={"App"}>
            {/*<OnOff />*/}
            {/*<UseStateOnOff on={switchOn} onChange={setSwitchOn}/>*/}

            <UncUseStateOnOff onChange={setSwitchOn}/> {switchOn.toString()}


            <UnControlledAccordion titleValue={"Bla Bla"} />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UnControlledRating/>*/}

            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>









            {/*<Rating value = {3} />*/}
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

//
// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle (props: PageTitlePropsType) {
//
//     console.log("PageTitle rendering")
//     return <h1>{props.title}</h1>
// }

// function hallo () {
//     alert ("Hallo IT-KAMASUTRA")
// }

export default App;
