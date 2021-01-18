import './App.css';
import Head from './components/Heading';
import List from './components/Lists';
import Gallery from './components/ImagesGallery';
import anything, {secondValue , firstName, lastName} from './components/ExpoImpo';
// import using wild card * all of the them as object.

import * as Obj from './components/ExpoImpo';

import * as Calculator from './components/Calculator';
import MenuDetails from './components/Restaurant';
import Data from './Data';

function App() {
  return (
    <div className="Appname">
      <Head/>
      <List/>
      <Gallery/>
      <p> {anything} </p>
      <p> {Obj.default}</p>
      <p> {secondValue} </p>
      <p> {Obj.secondValue}</p>
      <p> {`This is another example of normal default using function - My name is ${firstName()} ${lastName()}`}</p>
       <p> {Obj.firstName()}</p>
      <p> {Obj.lastName()}</p> 
      {Calculator.add(30,3)}
      {Calculator.sub(30,3)}
      {Calculator.multiply(30,3)}
      {Calculator.divide(30,7)}
      
      {/* Reusuable code with diff props */}

      <h1> Our menu items: </h1>
      <MenuDetails name="Rosted Chicken Red/white" category="non veg" price="300.00" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvJzr5N95nhtyDahga1OWEfz0lFOz2tQ4qA&usqp=CAU"/>
      <MenuDetails name="Mutton keema" category="non veg" price="400.00" image="https://i.pinimg.com/originals/b6/d3/0c/b6d30cd52e30d5c1872e42fdbb3d105e.jpg"/>
      <MenuDetails name="Mutton Biryani" category="non veg" price="250.00" image="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/mutton-biryani-recipe-500x375.jpg"/>
      <MenuDetails name="Fish fry" category="non veg" price="150.00" image="https://www.ndtv.com/cooks/images/KERELA.FISH.66%281%29.jpg"/>
      <MenuDetails name={Data[1].name} category={Data[0].category} price={Data[0].price} image={Data[0].image}/>

    </div>
  );
}

export default App;
