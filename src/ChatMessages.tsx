// ChatMessages.tsx
import React, { useState, useEffect } from 'react';
import './messages.css'

const ChatMessages = () => {
  const [chatData, setChatData] = useState<Array<any>>([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://qa.corider.in/assignment/chat?page=${pageNumber}`
        );
        const data = await response.json();

        // Sort the chatData based on the 'time' property in ascending order
        const sortedChatData = [...data['chats']].sort(
          (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
        );
        
        setChatData((prevData) => [...prevData, ...sortedChatData]);
        
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    };

    fetchData();
  }, [pageNumber]); // Fetch data when the component mounts and when pageNumber changes

  const handleScroll = () => {
    // Implement your logic to check the scroll position and update pageNumber if needed
    // For simplicity, I'm assuming a fixed threshold of 80% scroll to trigger the API call
    if (
      (window.innerHeight + window.scrollY) / document.body.scrollHeight >
      0.8
    ) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Add and remove scroll event listener on component mount and unmount

  return (
    <div className = 'message-container' >
      {/* Render chat messages from chatData */}
      <div className='message-div' >
        <img src = "/assets/Group4.png" alt="1" />
        <div className='messages'>
        Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money
        </div>
      </div>
      <div className='message-div ' >
        <div className='messages blue'>
        Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money
        </div>
      </div>
      <div className='message-div' >
        <img src = "/assets/Group41.png" alt="1" />
        <div className='messages'>
        Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money
        </div>
      </div>
      <div className='message-div' >
        <img src = "/assets/Group42.png" alt="1" />
        <div className='messages'>
        Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money
        </div>
      </div>

      {  chatData.map((elem: any) => (
        <div className='messages' key={elem.id}>
          {elem.message}
        </div>
      )) }
      
    </div>
  );
};

export default ChatMessages;
