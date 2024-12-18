import { useState, useEffect } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randomMessage());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreeting(randomMessage());
    }, 3000); // Change greeting every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [messages]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
    </div>
  );
}