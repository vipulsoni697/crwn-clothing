import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {BrowserRouter, Route,Routes,Navigate} from 'react-router-dom';
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
    console.log(this.props.currentUser);
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
      <Route path='/' element={<HomePage /> } />
      <Route path='/shop' element={<ShopPage/>} />
      <Route path='/signin' element={this.props.currentUser? <Navigate replace to ="/" />:<SignInAndSignUpPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
}

const mapStateToProps=({user})=>{
  return {
      currentUser:user.currentUser
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    setCurrentUser: (user)=>dispatch(setCurrentUser(user))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
