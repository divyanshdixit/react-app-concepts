import React from 'react'
import Heading from './Heading';
import List from './Lists';
import Gallery from './ImagesGallery';
import * as Objvalue from './ExpoImpo';

import * as Calculator from './Calculator';
import MenuDetails from './Restaurant';
import Data from '../Data';
import Category from './ConditionalRendering';
import SlotGame from './SlotGame';
import ExampleClass from './ClassExample';
import ExampleClassWithCons from './ClassWithConsExample';
import PropertyExample from './PropsExample';
import {Counter, count} from './UseStateHooks';
import GetCurrentTime from './GetCurrentTimeUseStateHook';
import DigitalClock from './DigitalClockUsingState';
import ReactForms from './ReactForms';
import Forms from './ReactFormWith2Fields';
import ReactFormEx3 from './ReactFormEx3';
import Forms4 from './ReactFormEx4';
import ToDoApp from './ToDoApp';
import FunctionalCompoWithProps from './FunctionalCompo';
import EventBinding from './EventBinding';
import ParentComponent from './ParentComponent';
import styles from '../Stylesheet.module.css';
import LifyCycleParent from './LifyCycleParentMount';
import StudentChildLC from './StudentChildLC';
import StudentParentLC from './StudentParentLC';
import CompareRegualrToPureCompo from './CompareRegualrToPureCompo';
import RefsDemo from './RefsDemo';
import RefPassFromParent from './RefsPassFromParenttoChild';
import RefForwardingParent from './RefForwardingParent';
import ContextCompoA from './ContextCompoA';
import HocClickCounter from './HocClickCounter';
import HocHoverCounter from './HocHoverCounter';
import HttpRequestAxios from './HttpGetRequestAxios';
import HttpPostRequestAxios from './HttpPostRequestAxios';
import PortalConcept from './PortalConcept';
import UseEffectHook from './UseEffectHook';
import { UseEffectHookDemo } from './UseEffectHookDemo';
// import {Provider, Consumer} from './ContextCreate';

const Services = () => {
    const FoodCategory = "veg";

    const UserContext = React.createContext();

    // creating context direclty using createContext() method, we have to import createContext() in the import react.
    // const NameContext = createContext();

    const {Provider, Consumer} = UserContext;

    function ShowCategory(){
        if(FoodCategory === 'veg'){
          return <Category category={FoodCategory}/>
        }else{
          return <Category category={FoodCategory}/>
        }
      }
      
      // Component inside App component:
      function Example(){ // Component name first letter must be in capital 
        return (
          <>
            <h3>Example component inside App component </h3>
          </>
        )
      }
      
      function menus(value, index, array){
        return(
          <MenuDetails 
            key={value.id} 
            name={value.name} 
            category={value.category} 
            price={value.price} 
            image={value.image}
            />
        )
      }
      
    return (
        <div>
            <h1 style={{color:'red', textAlign:'center'}}> You are now viewing services page and all the App component code pasted in services </h1>
            
            <UseEffectHookDemo/>

            <UseEffectHook/>

            <PortalConcept/>

            <HttpPostRequestAxios/>

            <HttpRequestAxios/>

            <HocClickCounter otherProps="Anything" pop1="jkjkjk"/>

            <HocHoverCounter/>

            <Provider value="Divyansh">
            <ContextCompoA/>
            </Provider>

            <RefForwardingParent/>

            <RefPassFromParent/>

            <RefsDemo/> 

            <CompareRegualrToPureCompo/>

            <StudentParentLC/>

            <LifyCycleParent/>

            <h1 className={styles.heading}> Center Heading </h1>

            <ParentComponent/>

            <EventBinding/>

            <FunctionalCompoWithProps name="Divyansh">
            <p> Hi, I'm children props of parent component. </p>
            </FunctionalCompoWithProps>

            <ToDoApp/>

            <Forms4/>

            <ReactFormEx3/>

            <Forms/>

            <ReactForms/>

            <DigitalClock/>
            <p> {count }</p>
            <Counter/>

            <GetCurrentTime/>

            <PropertyExample title="anything" name="Divyansh"/>
            <Example/>

            <ShowCategory/>

            {/* using ternary operator in JSX experssion, return is not needed in ternary */}
            {(FoodCategory === 'veg') ? <Category category={FoodCategory}/> : <Category category={FoodCategory}/>}

            <Heading/>

            <List/>

            <Gallery/>

            {/* <p> {anything} </p> */}

            <p> {Objvalue.default}</p>

            {/* <p> {secondValue} </p> */}

            <p> {Objvalue.secondValue}</p>

            {/* <p> {`This is another example of normal default using function - My name is ${firstName()} ${lastName()}`}</p> */}

            <p> {Objvalue.firstName()}</p>

            <p> {Objvalue.lastName()}</p> 

            {Calculator.add(30,3)}

            {Calculator.sub(30,3)}

            {Calculator.multiply(30,3)}

            {Calculator.divide(30,7)}

            Reusuable code with diff props

            <h1> Our menu items: </h1>

            {/* <MenuDetails name="Rosted Chicken Red/white" category="non veg" price="300.00" image=""/>
            <MenuDetails name="Mutton keema" category="non veg" price="400.00" image=""/>
            <MenuDetails name="Mutton Biryani" category="non veg" price="250.00" image=""/>
            <MenuDetails name="Fish fry" category="non veg" price="150.00" image=""/>
            <MenuDetails name={Data[1].name} category={Data[0].category} price={Data[0].price} image={Data[0].image}/> */}

            {/* use map function */}
            {Data.map(menus)}

            <SlotGame/>

            <ExampleClass title="example of state without constructor"/>
            <ExampleClassWithCons title="example of state with constructor"/>

        </div>
    )
}

export default  Services;