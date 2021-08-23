import logo from './logo.svg';
import './App.css';
import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';



function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="f0ef67c1-f0a1-4c18-964e-8364269fc093"
      userName="javascriptmastery"
      userSecret="secret"
      renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps } />}

    />
  );
}

export default App;
