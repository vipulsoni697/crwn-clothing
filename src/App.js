import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth = null; 

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            });
          })
      
      }
      setCurrentUser(userAuth);
      
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
      <Header />
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

const mapDispatchToProps=(dispatch)=>{
  return {
    setCurrentUser: (user)=>dispatch(setCurrentUser(user))
  }
}
export default connect(null,mapDispatchToProps)(App);
