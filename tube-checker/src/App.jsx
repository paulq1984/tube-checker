import { useState, useEffect } from 'react';
import './App.css';
import LineList from './Componets/LineList';

const URL = `https://api.tfl.gov.uk/Line/Mode/tube/Status?app_id=b95dd024192d47ceb03073d1d37e1425&app_key=9ff999ae04714df1b74c11d76857a798`;

function App() {
  const [lines, setLines] = useState([
    { name: 'Bakerloo', id: 1 },
    { name: 'Centeral', id: 2 },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      response.json().then((json) => {
        console.log(json);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Tube-Checker</h1>
        <i className="fa-solid fa-archway"></i>
        <LineList lines={lines} />
      </div>
    </>
  );
}

export default App;
