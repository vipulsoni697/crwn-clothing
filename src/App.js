import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import {BrowserRouter, Route,Routes} from 'react-router-dom';

// function Home(props)
// {
//   console.log(props)
//   return(
//     <div><h1>Home Page</h1></div>
//   );
// }

function Hats(props)
{
  console.log(props)
  return(
    <div><h1>Hats page</h1></div>
  );
}

function TopicDetails()
{
  return(
    <div><h1>Topic details page </h1></div>
  );
}


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path='/' element={<HomePage /> } />
      <Route path='/hats' element={<Hats/>} />
      <Route path='/topics/:topicId' element={<TopicDetails/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
