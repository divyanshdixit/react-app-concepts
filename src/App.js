import './App.css';
import React, {createContext} from 'react';
// import anything, {secondValue, firstName, lastName} from './components/ExpoImpo';
// import using wild card * all of the them as object.

import * as Objvalue from './components/ExpoImpo';

import * as Calculator from './components/Calculator';
import MenuDetails from './components/Restaurant';
import Data from './Data';
import Category from './components/ConditionalRendering';
import SlotGame from './components/SlotGame';
import ExampleClass from './components/ClassExample';
import ExampleClassWithCons from './components/ClassWithConsExample';
import PropertyExample from './components/PropsExample';
import {Counter, count} from './components/UseStateHooks';
import GetCurrentTime from './components/GetCurrentTimeUseStateHook';
import DigitalClock from './components/DigitalClockUsingState';
import ReactForms from './components/ReactForms';
import Forms from './components/ReactFormWith2Fields';
import ReactFormEx3 from './components/ReactFormEx3';
import Forms4 from './components/ReactFormEx4';
import ToDoApp from './components/ToDoApp';
import FunctionalCompoWithProps from './components/FunctionalCompo';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import styles from './Stylesheet.module.css';
import LifyCycleParent from './components/LifyCycleParentMount';
import StudentChildLC from './components/StudentChildLC';
import StudentParentLC from './components/StudentParentLC';
import CompareRegualrToPureCompo from './components/CompareRegualrToPureCompo';
import RefsDemo from './components/RefsDemo';
import RefPassFromParent from './components/RefsPassFromParenttoChild';
import RefForwardingParent from './components/RefForwardingParent';
import ContextCompoA from './components/ContextCompoA';
import HocClickCounter from './components/HocClickCounter';
import HocHoverCounter from './components/HocHoverCounter';
import HttpRequestAxios from './components/HttpGetRequestAxios';
import HttpPostRequestAxios from './components/HttpPostRequestAxios';
import PortalConcept from './components/PortalConcept';
import UseEffectHook from './components/UseEffectHook';
import { UseEffectHookDemo } from './components/UseEffectHookDemo';
// import {Provider, Consumer} from './components/ContextCreate';
import {one, two, getData} from './components/AdvancedJsCallback';
import { getPromiseData, promObj, getMultipliedNum } from './components/AdvancedJsPromise';
// import Route and Switch for client side routing using react-router-dom
import {Route, Switch, useHistory, Redirect} from 'react-router-dom';

import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { ErrorPage } from './components/ErrorPage';
import NavBar from './components/NavBar';
import Services from './components/Services';
import UsersLists from './components/UsersLists';
import UserView from './components/UserView';
import Search from './components/Search';
import Error404 from './components/Error404';
import NoteProject from './components/project/NoteProject';
import ReducerHookFetching from './components/ReducerHookFetching';
import ReducerHookFetchingTwo from './components/ReducerHookFetchingTwo';
import ReducerHookWithContext from './components/ReducerHookWithContext';
import ReducerSimpleCount from './components/ReducerSimpleCount';
import ReducerHookWithComplex from './components/ReducerHookWithComplex';
import ReducerMultipleUse from './components/ReducerMultipleUse';
import CallbackHookParent from './components/CallbackHookParent';
import MemoHookCounter from './components/MemoHookCounter';
import UseRefHook from './components/UseRefHook';
import UseRefHookExTimer from './components/UseRefHookExTimer';
import CustomHookUsageEx1 from './components/CustomHookUsageEx1';
import CustomHookUsageEx2 from './components/CustomHookUsageEx2';
import CustomHookCounterUsage1 from './components/CustomHookCounterUsage1';

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

function App() {
  const history = useHistory();

  return (
    <div className="Appname">
      
      <CustomHookCounterUsage1/>
      
      <CustomHookUsageEx1/>

      <CustomHookUsageEx2/>

      <UseRefHookExTimer/>

      <UseRefHook/>

      <MemoHookCounter/>

      <CallbackHookParent/>

      <ReducerHookWithContext/>

      <ReducerSimpleCount/>

      <ReducerHookWithComplex/>

      <ReducerMultipleUse/>

      <ReducerHookFetchingTwo/>

      <ReducerHookFetching/>

      <RefsDemo/>
      
      <NavBar/>

      <Switch>
      
        {/* for using Route - 3 attributes will use here, path, component, exact */}
        <Route  exact path='/' component={ () => <Home name="Props send through the route using callback function in component"/>} />
        <Route path='/about' render={ () => { return <About name="some props in about page passed in render method of route "/>}} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
        <Route exact path='/search' component={Search}/>
        <Route exact path='/users' component={UsersLists}/>
        {/* <Route path='/users/:id/:name/:username' component={ UserView}/> we can also make other component for viewing single user */}
        <Route path='/users/:id' component={ UserView}/> we can also make other component for viewing single user\
        <Route path='/note' component={NoteProject} />
        
        <Redirect to='/' />
        {/* error page don't have path */}
        <Route component={Error404} />

      </Switch>

      <button onClick={ () => history.push('/')}> Visit Home Page </button>

    {/* {one(two)} {getData()} */}

      {getPromiseData(promObj)}

    </div>
  );
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

export default App;

export {Provider, Consumer};
 