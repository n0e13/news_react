import React, { Component } from "react";
import {Button, TextField} from '@mui/material';
class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       redirect: false
    }
  }

  createNew = (e) => {
    e.preventDefault();

    // Recojo datos del formulario
    const title = e.target.title.value;
    const subtitle = e.target.subtitle.value;
    const imgSrc = e.target.img.value;

    // add es el nombre con el que se le pasa la función desde main
    // le paso la nueva noticia
    const oneNew = { title, subtitle, imgSrc };
    this.props.add(oneNew);

    // limpio el formulario
    e.target.title.value = '';
    e.target.subtitle.value = '';
    e.target.img.value = '';
  }

  render() {
    return (
      <div>
        <h1>Añade tu noticia</h1>
        <form onSubmit={this.createNew}>
        <TextField id="title" label="Título" variant="outlined" size="small"/>
        <TextField id="subtitle" label="Subtítulo" variant="outlined" size="small"/>
        <TextField id="img" label="Imagen" variant="outlined" size="small"/>
{/* 
          <label htmlFor="title">Título:
            <input type='text' id='title' name='title' /></label><br />
          <label htmlFor="subtitle">Subtítulo:
            <input type='text' id='subtitle' name='subtitle' /></label><br />
          <label htmlFor="img">Imagen:
            <input type='text' id='img' name='img' /></label><br /> */}
          <Button variant="outlined" size="small" type="submit">Guardar</Button>
        </form>
      </div>
    );
  }
}

export default Form;
