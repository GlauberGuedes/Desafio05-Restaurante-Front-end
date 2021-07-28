import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./paginas/Login";
import { AuthContextProvider } from "./contexto/AuthContext";
import useAuth from "./hooks/useAuth";

function RotasProtegidas(props) {
  const { token } = useAuth();
  return (
    <Route render={() => (token ? props.children : <Redirect to="/" />)} />
  );
}

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <RotasProtegidas>

          </RotasProtegidas>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;