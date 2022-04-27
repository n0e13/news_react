import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Form from './Form';
import Home from './Home';
import List from './ListNews'


class Main extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route element={<Form />} path='/home' />
          <Route element={<Home />} path='/form' />
          <Route element={<List />} path='/list' />
        </Routes>
      </main>
    );
  }
}

export default Main;
