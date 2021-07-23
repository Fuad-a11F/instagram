import React from 'react';
import {Switch, Route} from 'react-router-dom'
import io from 'socket.io-client'
import { GET_CHAT } from './GraphQl/Queries';
import { useQuery } from '@apollo/client';

import Messages from "./components/Messages/Messages";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Login from './components/Auth_Login/Login'
import Auth from "./components/Auth_Login/Auth";
import 'firebase/storage'
import firebase from 'firebase/app'

// Доработать пагинацию и вывод постов

export let socket;

function App() {
  let firebaseConfig = {
    apiKey: "AIzaSyAOHnVJX1e_zXFZFgfpZwMj1A7fwdG3UwM",
    authDomain: "stellar-fx-312509.firebaseapp.com",
    projectId: "stellar-fx-312509",
    storageBucket: "stellar-fx-312509.appspot.com",
    messagingSenderId: "299029629076",
    appId: "1:299029629076:web:88f24d0069c344c7e6cc81",
    measurementId: "G-WVMTKGSTCP"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 } else {
    firebase.app(); 
 }


  let { data} = useQuery(GET_CHAT, {variables: {token: localStorage.getItem('token')}})
  let [users, setUsers] = React.useState()
  let ENDPOINT = 'localhost:8000'
  React.useEffect(() => {
    socket = io(ENDPOINT) 
    if (users) {
      users.forEach(item => {
        socket.emit('join', {user_id: item.id, my_id: localStorage.getItem('token')}) 
      })   
    }
  }, [users])

  React.useEffect(() => {
    if (data) setUsers(data.getChat)
  }, [data])


  return (

      <div className="App">
          <Switch>
            <Route path='/dialoge/:id' render={(e) => <Messages id={e.location.pathname} />}/>
            <Route path='/dialoge' render={() => <Messages  />}/>
            <Route  path='/profile/:id/saved' render={(e) => <Profile id={e.location.pathname} main_page='saved'/>}/>
            <Route  path='/profile/:id/add' render={(e) => <Profile id={e.location.pathname} main_page='add'/> }/>
            <Route exact path='/profile/:id' render={(e) => <Profile id={e.location.pathname} main_page='published'/> }/>            <Route  path='/setting/main' render={() => <Settings />}/>
            <Route  path='/setting/change' render={() => <Settings />}/>
            <Route  path='/setting/save' render={() => <Settings />}/>
            <Route path='/login' render={() => <Login />}/>
            <Route path='/authenticate' render={() => <Auth />}/>
            <Route path='/' render={() => <Main />}/>
          </Switch> 
      </div>
 
  );
}

export default App;
