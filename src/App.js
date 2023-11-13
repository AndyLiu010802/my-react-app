import Header from "./components/Header";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Card from "./components/Card";


function App() {
  return (
    <main>
      <Router>
        <Link to="/">
          <Header />
        </Link>
      </Router>
      <div className="card-container">
      <Card />
      <Card />
      <Card />
      </div>
      
    </main>
  
  );
}

export default App;
