import React, { useEffect } from 'react';
import {Messenger } from 'messanger-ai';
import 'messanger-ai/style.css';
const App = () => {
  useEffect(() => {
    const config = {
      holder: 'messanger',
      picture:'',
      socials: [
        { link: "https://instagram.com/name_of_account", type: "support" },
        { link: "https://t.me/name_of_account", type: "telegram" },
        { link: "https://facebook.com/name_of_account", type: "facebook" },
        { link: "https://twitter.com/name_of_account", type: "twitter" }
      ],
      token:'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',
      tools: [], // Specify the desired tools here
      name: 'React App Ai',
    };
    const messenger = new Messenger(config); // Use the correct path to the default object
    
    return () => {
      // Clean up on component unmount, if necessary
      // For example: messenger.destroy();
    };
  }, []);
  return (
    <div>
      <div id="messanger"></div>
    </div>
  );
};

export default App;
