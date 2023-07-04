import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Headerbar from './components/Headerbar';

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Headerbar />
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
