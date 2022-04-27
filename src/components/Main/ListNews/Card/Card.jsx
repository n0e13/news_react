import React, { Component } from "react";

class Card extends Component {

  render() {
    const  news  = this.props.data;
    const title = news.headline.main;
    const subTitle = news.abstract;
    const webUrl = news.web_url;
    const source = news.source;
    const imgSrc = `https://www.nytimes.com/${news.multimedia[0].url}`;
    const date = news.pub_date;
    const section = news.section_name;
    const author = news.byline.person.firstname;

    return (
      <div>
        Título: {title}, Sub:{subTitle} URL: {webUrl}, En: {source}, Fecha: {date}, Sección: {section}, Autor/a: {author}
        <img src={imgSrc} alt='imagen' />
      </div>
    );
  }
}

export default Card;
