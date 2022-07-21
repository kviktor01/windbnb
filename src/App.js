import Stay from "./components/Stay";
import './App.css';
import {useState} from "react"
import Menu from "./components/Menu";
import Search from "./components/Search";


function App() {
  let json=require('./stays.json');
  let localStays=[];
  for (const value of json) {
    if(value.city==="Helsinki"){
      localStays.push(value);
    }
  }
  let setStays=(city,guestCount) =>{
    localStays=[];
    for (const value of json) {
      if(value.city===city && value.maxGuests>=guestCount ){
        localStays.push(value);
      }
    }
    setCurrentStays(localStays);
  }
  let allCity=[];
  json.map((value)=>{
    if(!allCity.includes(value.city)){
      allCity.push(value.city);
    }
  });
  console.log(allCity);
  const [currentStays, setCurrentStays] = useState(localStays);
  const [currentCity,setCurrentCity] = useState("Helsinki")
  const [searching,setSearching] = useState(false);
  
  const [adultsCount,setAdultsCount] = useState(0);
  const [childrenCount,setChildrenCount] = useState(0);
  
  return (
    <div className="App" >
      <Menu city={currentCity} onSearching={setSearching}/>
      <div className="img-container">
        {currentStays.map((value,index)=>{
          return (
            <Stay key={index} stay={value} >

            </Stay>
          );
        })}
      </div>
      {searching ? 
      <Search city={currentCity} cities={allCity} setCity={setCurrentCity} setSearch={setSearching} setStays={setStays} childrens={childrenCount} adults={adultsCount} setAdults={setAdultsCount} setChildrens={setChildrenCount}/> :""}
    </div>
  );
}

export default App;
