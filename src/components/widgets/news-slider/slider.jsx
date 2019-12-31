import React, { Component } from 'react';
import SliderTemplates from './slider-templates'
import {URL} from '../../../config'
import axios from 'axios'

class NewsSlider extends Component {
    state = {  
        news:[]
    }
componentDidMount(){
  axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)//all what is after article is a param to choose number of aticles to
.then
( response=>{
    this.setState({news:response.data})
})}

    render() {
        console.log(this.state.news) 
        return ( 
            <div>
                <SliderTemplates  type={this.props.type} data={this.state.news} settings={this.props.settings}/>
            </div>
        );
    }
}
 
export default NewsSlider;