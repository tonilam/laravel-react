import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default Main;

const container = document.getElementById('app');
if (!!container) {
    const root = ReactDOM.createRoot(container);
    root.render(<Main />);
}
