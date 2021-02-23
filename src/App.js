import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import Boot from './redux/boot';
import Routes from './router';
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import "react-datepicker/dist/react-datepicker.css";     

const App = () => (
  <Provider store={store}>
    <NotificationContainer />
    <Routes /> 
  </Provider>
);

export default App;
