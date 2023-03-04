import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
        imageNum :0
    }
  }
  nextImage = () => {
    if (this.state.imageNum < images.length - 1)
      this.setState({ imageNum: this.state.imageNum + 1 });
  }
  

  previousImage = () => {
    if (this.state.imageNum > 0){
    this.setState({imageNum: this.state.imageNum-1})}
  }
  render() {
    return (
        <div >
            <div className="title"><h1>{images[this.state.imageNum].title}</h1></div>
            <div id='container'>
            <div onClick={this.previousImage}> <ArrowBackIosNewIcon /></div>
            <img src={images[this.state.imageNum].img}/>
            <div onClick={this.nextImage}> <ArrowForwardIosIcon/></div>
            </div>
            <div className="subtitle"><p>{images[this.state.imageNum].subtitle}</p></div>
      </div>
    );
  }
}

export default Carousel;
