import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
