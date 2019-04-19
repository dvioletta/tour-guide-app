import React from 'react';

const CustomerForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    const customer = {
        "firstName": event.target.firstName.value,
        "lastName": event.target.lastName.value,
        "age": event.target.age.value,
        "address": event.target.address.value,
        "telNumber": event.target.telNumber.value,
        "email": event.target.email.value
      }
    // TODO: props.handleCustomerPost(customer)

  }
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" name="firstName"/>
            <input type="text" placeholder="Last Name" name="lastName"/>
            <input type="number" placeholder="Age" name="age"/>
            <input type="text" placeholder="Address" name="address"/>
            <input type="text" placeholder="Tel" name="telNumber"/>
            <input type="text" placeholder="Email" name="email"/>
            <button type="submit">Save</button>
          </form>
        </div>
    )


}

export default CustomerForm;