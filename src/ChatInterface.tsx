// ChatInterface.tsx
import React from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import Reply from './Reply'
import PhoneStatusBar from './PhoneStatusBar';

const ChatInterface = () => {
  return (
    <div className="chat-interface">
      <PhoneStatusBar />
      <ChatHeader />
      <LineBreak />
      <Reply />
      <ChatMessages /> 
      
      
    </div>
  );
};

const LineBreak = () =>{
  return (
    <div className="date">
    <svg xmlns="http://www.w3.org/2000/svg" width="116" height="2" viewBox="0 0 116 2" fill="none">
<path d="M0 1H116" stroke="#B7B7B7"/>
</svg><span>12 JAN, 2023</span><svg xmlns="http://www.w3.org/2000/svg" width="116" height="2" viewBox="0 0 116 2" fill="none">
<path d="M0 1H116" stroke="#B7B7B7"/>
</svg>
    </div>
  )
}

export default ChatInterface;
