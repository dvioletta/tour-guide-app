import React, {Component} from "react";
import Booking from "../../components/bookings/Booking"
import BookingDetails from "../../components/bookings/BookingDetails";
import Request from "../../helpers/request"

class BookingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: null,
      attraction: null,
      customer: null
    }
  }

  componentDidMount(){

    let request = new Request()
    const url = '/bookings/' + this.props.id;
    request.get(url).then((data) => {
      this.setState({booking: data})
    })
    .then(()=>{
      request.get("/bookings/" + this.props.id + "/customer").then((data) => {
        this.setState({customer: data})
        console.log("request", data);
      })
    })
    .then(()=>{
      request.get("/bookings/" + this.props.id + "/attraction").then((data) => {
        this.setState({attraction: data})
      })
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/bookings/' + id;
    request.delete(url).then(() => {
      window.location = '/bookings'
    })
  }

  render(){
    console.log("rendering...booking container", this.state.customer);
    if (!this.state.booking) return null;
    return(
      <div className = "booking">
      <h1>Booking</h1>
      <Booking
      booking = {this.state.booking}
      customer = {this.state.customer}
      attraction = {this.state.attraction}
      />
      <BookingDetails booking = {this.state.booking} handleDelete = {this.handleDelete}/>
      </div>
    )
  }
}

export default BookingContainer;