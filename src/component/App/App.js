import Home from '../Home/Home';
import Navbar from './Navbar';
import Blog from '../Blog/Blog';
import FormBlog from '../Form/FormBlog';
import ReadBlog from '../Blog/ReadBlog';
import TableBlog from '../Table/TableBlog';
import TableCategoryBlog from '../Table/TableCategoryBlog';
import FormCategoryBlog from '../Form/FormCategoryBlog';
import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { AuthProvider } from '../GlobalState/Auth';
import { Provider } from 'react-redux';
import globalState from '../GlobalState/globalstate';
import GlobalStyle from '../GlobalStyles';
import {ApolloProvider} from "@apollo/client";
import client from './apolloConfig';
import { ToastContainer } from 'react-toastify';
import FormLogin from '../Form/FormLogin';
import PrivateRoute from './PrivateRoute';
import ErrorPage from './ErrorPage';

const App = ()=>{
  return (
    <ApolloProvider client={client}>
      <Provider store={globalState}>
        <AuthProvider>
          <GlobalStyle/>
          <ToastContainer />
          <Router>
            <Navbar/>
            <Switch>
              <Route path="/blog/search/:searchParams" component={Blog} />
              <Route path="/blog/category/:categoryParams" component={Blog} />
              <PrivateRoute path="/blog/create" component={FormBlog} />
              <PrivateRoute path="/blog/edit/:id" component={FormBlog} />
              <Route path="/blog/:link" component={ReadBlog} />
              <Route path="/blog" component={Blog} />
              <PrivateRoute path="/table-blog" component={TableBlog} />
              <PrivateRoute path="/table-category-blog" component={TableCategoryBlog} />
              <PrivateRoute path="/category/edit/:id" component={FormCategoryBlog} />
              <PrivateRoute path="/category/create" component={FormCategoryBlog} />
              <Route path="/login" component={FormLogin} />
              <Route exact path="/" component={Home} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          </Router>
        </AuthProvider>
      </Provider>
    </ApolloProvider>
  )
}

export default App;
