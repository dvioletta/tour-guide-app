import React, {Component} from 'react';

class AttractionEditForm extends Component{

  constructor(props){
    super(props)
    this.state = {
      name: props.attraction.name,
      location: props.attraction.location,
      category: props.attraction.category,
      description: props.attraction.description,
      fee: props.attraction.fee,
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
        "accessibility": event.target.accessibility.value,
        "openingTime": event.target.openingTime.value
      }

    this.props.handleAttractionUpdate(attraction)
    }

    render(){
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} name="name" onChange={evt => this.setState({ name: evt.target.value })}/>
            <input type="text" value={this.state.location} name="location" onChange={evt => this.setState({ location: evt.target.value })}/>
            <input type="text" value={this.state.category} name="category" onChange={evt => this.setState({ category: evt.target.value })}/>
            <input type="text" value={this.state.description} name="description" onChange={evt => this.setState({ description: evt.target.value })}/>
            <input type="number" value={this.state.fee} name="fee" onChange={evt => this.setState({ fee: evt.target.value })}/>
            <input type="text" value={this.state.accessibility} name="accessibility" onChange={evt => this.setState({ accessibility: evt.target.value })}/>
            <input type="text" value={this.state.openingTime} name="openingTime" onChange={evt => this.setState({ openingTime: evt.target.value })}/>

            <button type="submit">Save</button>
          </form>
        </div>
      )
    }
}

export default AttractionEditForm;