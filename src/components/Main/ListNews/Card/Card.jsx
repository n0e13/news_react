import React, { Component } from "react";

class Card extends Component {

  render() {
    const news = this.props.data;

    let title = '';
    news.title
      ? title = news.title
      : title = news.headline.main;

    let subTitle = '';
    news.subTitle
      ? subTitle = news.subtitle
      : subTitle = news.abstract;

    let imgSrc = '';
    if (news.imgSrc) {
      imgSrc = news.imgSrc;
    } else if (news.multimedia && news.multimedia.length > 0) {
      imgSrc = `https://www.nytimes.com/${news.multimedia[0].url}`;
    }

    return (
      <div>
        Título: {title}, Sub:{subTitle}
        {imgSrc !== ''
          ? <img src={imgSrc} alt='imagen' />
          : null}
      </div>
    );
  }
}

export default Card;
