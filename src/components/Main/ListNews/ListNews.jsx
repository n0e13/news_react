import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Card from './Card';

class ListNews extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: []
    }
  }

  componentDidMount = async () => {
    try {
      const resp = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${process.env.REACT_APP_API_KEY}`);
      const newsData = await resp.data.response.docs.slice(0, 5);
  
      // Si hay, guardo las noticias creadas primero
      if (this.props.data.length > 0) {
        this.setState({ news: [...this.props.data, ...newsData] });
      } else {
        this.setState({ news: newsData });
      }
    } catch (error) {
      throw error;
    }
  }

  paintNews = () => {
    return this.state.news.map((oneNew) => {
      let id = uuidv4();
      console.log(oneNew);
      return <Card data={oneNew} key={id} />
    });
  }

  render() {
    return (
      <div>
        <h1>Fakes News</h1>
        {this.paintNews()}
      </div>
    );
  }
}

export default ListNews;
