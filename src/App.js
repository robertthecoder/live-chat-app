import logo from './logo.svg';
import './App.css';
import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

import LoginForm from './components/LoginForm'

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />

  console.log('username', localStorage.getItem('username'));

  return (
    <ChatEngine
      height="100vh"
      projectID="f0ef67c1-f0a1-4c18-964e-8364269fc093"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      // userName="zackzimmer"
      // userSecret="sec"
      
      renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps } />}

    />
  );
}

export default App;
