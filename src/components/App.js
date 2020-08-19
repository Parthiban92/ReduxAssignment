import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import ReduxSelect from './ReduxSelect';
import Select from './Select';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Select />
        <hr />
        <ReduxSelect />
      </Provider>
    )
  }
}
