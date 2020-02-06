import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbars'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Navbar} />
      </Router>
    )
  }
}

export default App;