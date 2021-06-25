import {Switch, Route} from 'react-router-dom'
import Messages from "./components/Messages/Messages";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Login from './components/Auth_Login/Login'
import Auth from "./components/Auth_Login/Auth";
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
    ApolloProvider,
  } from "@apollo/client";
  import { onError } from "@apollo/client/link/error";
  
  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });
  
  const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:8000/graphql" }),
  ]);
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <Switch>
            <Route path='/dialoge/:id' render={(e) => <Messages id={e.location.pathname} />}/>
            <Route path='/dialoge' render={() => <Messages  />}/>
            <Route  path='/profile/saved' render={() => <Profile main_page='saved'/>}/>
            <Route  path='/profile/:id/add' render={(e) => <Profile id={e.location.pathname} main_page='add'/> }/>
            <Route exact path='/profile/:id' render={(e) => <Profile id={e.location.pathname} main_page='published'/> }/>
            {/* <Route  path='/profile/add' render={() => <Profile main_page='add'/>}/> */}
            {/* <Route exact path='/profile' render={() => <Profile main_page='published'/>}/> */}
            <Route  path='/setting/main' render={() => <Settings />}/>
            <Route  path='/setting/change' render={() => <Settings />}/>
            <Route  path='/setting/save' render={() => <Settings />}/>
            <Route path='/login' render={() => <Login />}/>
            <Route path='/authenticate' render={() => <Auth />}/>
            <Route path='/' render={() => <Main />}/>
          </Switch> 
      </div>
    </ApolloProvider>
  );
}

export default App;
