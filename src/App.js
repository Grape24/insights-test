import React from 'react';
import './App.css';
import InsightsPage from './pages/InsightsPage.jsx';
import AppHeader from './components/AppHeader.jsx';
import AppNav from './components/AppNav/AppNav.jsx';
import ProcessStatus from './components/ProcessStatus.jsx';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <AppNav></AppNav>
      <ProcessStatus></ProcessStatus>
      <InsightsPage></InsightsPage>
      <div>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
