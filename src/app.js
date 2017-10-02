import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EventPage from './containers/EventPage.jsx';

ReactDOM.render(<EventPage url="http://localhost:9090/events/" />, document.getElementById('app'));
