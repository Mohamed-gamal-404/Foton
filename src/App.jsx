import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MainHeader from './layout/MainHeader';

function HomePage() {
  return <h1 className='text-[95px] bg-red-500'>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <>
    <MainHeader/>
    </>
  );
}

export default App;