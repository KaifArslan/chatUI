// App.tsx
import React, { FC } from 'react';
import './style.css';
import ChatInterface from './ChatInterface';

const App: FC = () => {
  return (
    <div className='app'>
      <ChatInterface />
    </div>
  );
};

export default App;
