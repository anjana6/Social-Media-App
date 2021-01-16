import React from 'react';

import {
  Form,
  Button,
  DropdownButton,
  Dropdown,
  Image,
  Row,
} from 'react-bootstrap';
import elon from '../../assets/ellon.jpg';
export default function EditProfile() {
  return (
    <div className='col-md-12'>
      <h3>Edit Your Profile</h3>
      <Row>
        <div className='col-md-6' style={{ paddingLeft: '20%' }}>
          <Form>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>FirstName</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>LastName</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>City</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Hobby</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <DropdownButton id='Gender' title='Gender'>
                <Dropdown.Item href='#/action-1'>Male</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Female</Dropdown.Item>
              </DropdownButton>
            </Form.Group>

            <Form.Group>
              <Form.File
                id='exampleFormControlFile1'
                label='Upload Your Profile Picture'
                accept='image/x-png,image/gif,image/jpeg'
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
        <div className='col-md-6 ' style={{ height: '100%' }}>
          <Image src={elon} fluid style={{ height: '100%' }} />
        </div>
      </Row>
    </div>
  );
}
