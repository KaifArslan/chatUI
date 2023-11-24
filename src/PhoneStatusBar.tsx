// PhoneStatusBar.tsx

import React, { useEffect, useState } from 'react';

const PhoneStatusBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Update current time every second
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="phone-status-bar">
      <div className="time">{currentTime}</div>
      <div className="status-icon">
        {/* You can replace 'your-image-path' with the actual path to your image */}
        <img src="/assets/phone_status.png" alt="" />
      </div>
    </div>
  );
};

export default PhoneStatusBar;
