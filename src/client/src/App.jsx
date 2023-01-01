import "./App.css";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import React, {useEffect, useState} from "react";

const Placeholder = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users').then(async (user) => {
      const usersReturned = await user.json();
      setUsers(Object.values(usersReturned)[0])
    })
  }, []);

  return <div>{users.join(',')}</div>
};

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/flashcards"
                 element={<Placeholder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
