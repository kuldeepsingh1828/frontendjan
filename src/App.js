import User from './components/Users';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
function App() {

  return <Router>
    <Routes>
      <Route element={<h1>Home Page</h1>} path="/" />
      <Route element={<User />} path="/users-info" />
    </Routes>
  </Router>;
}

export default App;
