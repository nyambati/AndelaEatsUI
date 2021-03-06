import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthorized } from '../../helpers/authorization';
import Navbar from '../../common/Navbar/Navbar';
import Sidenav from '../../common/Sidenav/Sidenav';

/**
 * Application order page
 */
class OrderPage extends Component {
/**
 * Creates an instance of login form
 * @param {any} props -
 */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * 
   * This is React render method that render the UI on the dom
   * @function SigninForm
   * @return { void }
   */
  render() {
    if (!isAuthorized()) {
      return <Redirect to="/" />;
    }
    return (
      <div className="wrapper">
        <Navbar />
        <Sidenav />
      </div>
    );
  }
}
export default OrderPage;
