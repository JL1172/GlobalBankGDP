import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"; 
import ChartForBrazil from './components/Chart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [data,setData] = useState(false); 

  return (
    <div className="App">
      
      <ChartForBrazil />
    </div>
  );
}

export default App;
