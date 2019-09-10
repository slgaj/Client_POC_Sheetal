import React from 'react';
import { Form } from 'semantic-ui-react';

class AddNew extends React.Component {
  constructor (props) {

  }

  render() {
   

    return (
      <Form >
        <Form.Input
          label="Name"
          type="text"
          name="name"
          onChange=
          
        />
        <Form.Input
          label="Email"
          type="email"
          name="email"
         
          
        />
        <Form.Input
          label="Phone"
          type="tel"
          name="phone"
          
        
        />
        <Form.Input
          label="Address"
          type="text"
          name="address"
          
          
        />
        <Form.Input
          label="City"
          type="text"
          name="city"
         
         
        />
        <Form.Input
          label="Zip Code"
          type="text"
          name="zip"
          
         
        />
        <Form.Group>
          <Form.Button type="submit">Submit</Form.Button>
          <Form.Button >Cancel</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default AddNew;
