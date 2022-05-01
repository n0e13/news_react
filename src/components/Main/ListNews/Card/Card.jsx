import React, { Component } from "react";
import noImage from '../../../../assets/img/noimage.jpeg';
import { Card as CardNew, CardContent, CardMedia, Typography } from '@mui/material';
class Card extends Component {

  render() {
    const news = this.props.data;

    let title = '';
    news.title
      ? title = news.title
      : title = news.headline.main;

    let subTitle = '';
    news.subtitle
      ? subTitle = news.subtitle
      : subTitle = news.abstract;

    let imgSrc = '';
    if (news.imgSrc) {
      imgSrc = news.imgSrc;
    } else if (news.multimedia && news.multimedia.length > 0) {
      imgSrc = `https://www.nytimes.com/${news.multimedia[0].url}`;
    } else {
      imgSrc = noImage;
    }

    return (
      /*       <div>
                Título: {title}, Sub:{subTitle}
                <img src={imgSrc} alt='imagen' />
            </div> */
      <CardNew sx={{ width: 300, margin: 1 }}>
        <CardMedia component="img" height="120" image={imgSrc} alt="news" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subTitle}
          </Typography>
        </CardContent>
      </CardNew>
    );
  }
}

export default Card;
