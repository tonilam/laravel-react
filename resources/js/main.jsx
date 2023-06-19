import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Blog from './pages/Blog';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

function Main() {
    return <h1>MAIN</h1>;
}

export default Main;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById('app'));

    Index.render(<Main />);
}
