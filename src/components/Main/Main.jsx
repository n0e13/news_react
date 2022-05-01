import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Form from './Form';
import Home from './Home';
import List from './ListNews'


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    }
  }

  addNew = (oneNew) => {
    this.setState({ news: [...this.state.news, oneNew] });
  }


  render() {
    return (
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Home />} path='/home' />
          <Route element={<Form add={(oneNew) => this.addNew(oneNew)} />} path='/form' />
          <Route element={<List data={this.state.news} />} path='/list' />
        </Routes>
      </main>
    );
  }
}

export default Main;
