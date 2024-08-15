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
      <div>
        <div className="header">
          <h1>Tube Checker</h1>
        </div>

        <section>
          {isLoading && <div>Loading...</div>}
          {lines && <LineList lines={lines} />}
        </section>
      </div>
    </>
  );
}

export default App;
