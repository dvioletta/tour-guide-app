import React, {Component} from 'react';
import {accessabilityArr, timeOfDayArr} from "../../helpers/enums"


class AttractionEditForm extends Component{

  constructor(props){
    super(props)
    this.state = {
      name: props.attraction.name,
      location: props.attraction.location,
      category: props.attraction.category,
      description: props.attraction.description,
      fee: props.attraction.fee,
      pic: props.attraction.pic,
      accessibility: props.attraction.accessibility,
      openingTime: props.attraction.openingTime

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){


  }

  handleSubmit(event){
    event.preventDefault();
    const attraction = {
        "name": event.target.name.value,
        "location": event.target.location.value,
        "category": event.target.category.value,
        "description": event.target.description.value,
        "fee": event.target.fee.value,
        "pic": event.target.pic.value,
        "accessibility": event.target.accessibility.value,
        "openingTime": event.target.openingTime.value
      }

    this.props.handleAttractionUpdate(attraction)
    }



    render(){
      const accessibilityOptions = accessabilityArr.map((accessibility, index) => {
        return <option key={index} value={accessibility.value}>{accessibility.displayName}</option>
      })
      const timeOfDayOptions = timeOfDayArr.map((time, index) => {
        return <option key={index} value={time.value}>{time.displayName}</option>
      })

      return (
        <div id = "attraction-form-container">
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" value={this.state.name} name="name" onChange={evt => this.setState({ name: evt.target.value })}/>
            <label>Location:</label>
            <input type="text" value={this.state.location} name="location" onChange={evt => this.setState({ location: evt.target.value })}/>
            <label>Category:</label>
            <input type="text" value={this.state.category} name="category" onChange={evt => this.setState({ category: evt.target.value })}/>
            <label>Description:</label>
            <input type="text" value={this.state.description} name="description" onChange={evt => this.setState({ description: evt.target.value })}/>
            <label>Fee:</label>
            <input type="number" value={this.state.fee} name="fee" onChange={evt => this.setState({ fee: evt.target.value })}/>
            <label>Image Url:</label>
            <input type="text" value={this.state.pic} name="pic" onChange={evt => this.setState({ pic: evt.target.value })}/>
            <label>Accessibility:</label>
            <select name="accessibility" onChange={evt => this.setState({accessibility: evt.target.value })}>
            {accessibilityOptions}
            </select>
            <br></br>
            <label>Opening Time:</label>
            <select name="openingTime" onChange={evt => this.setState({openingTime: evt.target.value})}>
            {timeOfDayOptions}
            </select>
            <br></br>
            <button type="submit">Save</button>
          </form>
        </div>
      )
    }
}

export default AttractionEditForm;
