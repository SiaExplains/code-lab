import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
    id: number;
    title: string;
    age?: number;
}

const Component1: React.FC<Props> = () => {
    return (
        <div>
            <input />
        </div>
    );
};

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Component1 id={1} title='test' />
            </header>
        </div>
    );
}

export default App;
