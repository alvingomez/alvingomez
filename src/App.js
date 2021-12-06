import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import CurrentWork from './pages/CurrentWork';
import Resume from "./pages/Resume";
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/currentwork" component={CurrentWork} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
