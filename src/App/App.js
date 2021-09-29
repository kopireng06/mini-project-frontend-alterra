import Home from '../Home/Home';
import Navbar from './Navbar';
import Blog from '../Blog/Blog';
import Form from '../Form/Form';
import NavMobile from './NavMobile';
import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import globalState from '../GlobalState/globalstate';
import GlobalStyle from '../Theme/GlobalStyles';
import {ApolloProvider} from "@apollo/client";
import client from './apolloConfig';

const App = ()=>{
  return (
    <ApolloProvider client={client}>
      <Provider store={globalState}>
        <GlobalStyle/>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/form" component={Form} />
            <Route exact path="/" component={Home} />
          </Switch>
          {/* <NavMobile/> */}
        </Router>
      </Provider>
    </ApolloProvider>
  )
}

export default App;
