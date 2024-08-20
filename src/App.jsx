import { useState, useEffect } from 'react';
import './App.css';
import LineList from './Componets/LineList';

const URL = `https://api.tfl.gov.uk/Line/Mode/tube/Status?app_id=b95dd024192d47ceb03073d1d37e1425&app_key=9ff999ae04714df1b74c11d76857a798`;

function App() {
  const [lines, setLines] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLines(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Tube-Checker</a>
        </div>
        <div className="flex-none gap-2">
          <div className="btn btn-ghost btn-circle text-xl">
            <i className="fa-solid fa-train-subway"></i>
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {isLoading && <div>Loading...</div>}
        {lines && <LineList lines={lines} />}
      </div>
    </>
  );
}

export default App;
