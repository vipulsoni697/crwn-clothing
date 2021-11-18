import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import {auth,createUserProfileDocument} from './firebase/firebase.utils'

// function Home(props)
// {
//   console.log(props)
//   return(
//     <div><h1>Home Page</h1></div>
//   );
// }

// function Hats(props)
// {
//   console.log(props)
//   return(
//     <div><h1>Hats page</h1></div>
//   );
// }

// function TopicDetails()
// {
//   return(
//     <div><h1>Topic details page </h1></div>
//   );
// }


class App extends React.Component {
  constructor(){
  super();
  this.state={
    currentUser:null,
  }
}
  unsubscribeFromAuth = null; 

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
          })
      
      }
      this.setState({currentUser : userAuth});
      
    })
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render()
  {
  return (
    <BrowserRouter>
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
      <Route path='/' element={<HomePage /> } />
      <Route path='/shop' element={<ShopPage/>} />
      <Route path='/signin' element={<SignInAndSignUpPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
}


export default App;
