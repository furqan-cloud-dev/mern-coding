import { useEffect, useState } from 'react'
import './App.css'
import Univeristy, { UniversityModel } from './components/uni'
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom';
import UniversityDetail from './components/UniversityDetail';

function App() {

  const [data, setData] = useState([]);




  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://universities.hipolabs.com/search?country=Pakistan");
      const json = await response.json();
      console.log({ json });
      setData(json);

    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="uni" element={<UniversityDetail />} />

          </Route>
        </Routes>
      </BrowserRouter>


      <main>
        <div>
          {
            data.map(uni =>
              < Univeristy name={uni.name} country={uni.country} webSites={uni.web_pages} />
            )
          }


        </div>
      </main>

    </>
  )
}

export default App
