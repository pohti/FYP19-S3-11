// essential
import React, {Component} from 'react';

// importing Components
import LoginForm from './components/common_assets/LoginForm'
import Employer from './components/employer/Employer';
import Student from './components/student/Student';

// importing CSS
import './App.css'



/* 
App will first look at the 'localStorage' to check whether the user already logged in or not.
If the user is already logged in, the app will redirect to corresponding app (student.js, employer.js or admin.js)
*/
class App extends Component {
  constructor(){
    super()
    this.state = {
      isAuthenticated : localStorage.getItem('isAuthenticated'), // to check whether user is already logged in
      userType : localStorage.getItem('userType') // to check the user type (student, employer, admin)
    }
  }

  updateLoginState = () => {
    this.setState ({
      isAuthenticated : localStorage.getItem('isAuthenticated'),
      userType : localStorage.getItem('userType')
    })
  }

  getContentToRender = () => {
    // user is not logged in
    if (!this.state.isAuthenticated) {
      return <LoginForm updateLoginState={this.updateLoginState}/>
    }
    // if the user is logged in, render corresponding component for user (depending on the usertype)
    else {
      // PLACE YOUR APP HERE
      switch (this.state.userType) {
        case 'Student' : return <Student/>;
        case 'Employer' : return <Employer/>;
        case 'Admin' : return (<div>Hello Admin</div>);
      }
    }
  }

  render() {
    return (
      <div>
        <this.getContentToRender/>
      </div>
    )
  }
}

export default App
