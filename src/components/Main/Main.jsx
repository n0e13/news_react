import React, { Component } from "react";
//import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
//import { newsContext } from '../../context/newsContext';
import Form from './Form';
import Home from './Home';
import List from './ListNews'


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
/* 
    const [news, setNews] = useState({});

    const saveNews = (news) => {
      setNews(news);
    }

    const data = {
      news,
      saveNews
    }; */
  }


  render() {
    return (
      <main>
        <Routes>

          <Route index element={<Home />} />
          <Route element={<Home />} path='/home' />
       {/*    <newsContext.Provider value={this.data}> */}
            <Route element={<Form />} path='/form' />
            <Route element={<List />} path='/list' />
         {/*  </newsContext.Provider> */}
        </Routes>
      </main>
    );
  }
}

export default Main;
