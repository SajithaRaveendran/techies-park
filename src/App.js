import './App.css';

//components
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/routing/routers/AppRouter';

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
