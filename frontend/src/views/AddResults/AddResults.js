import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YearPicker from 'react-year-picker';
import { Row, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import {
  Input,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const AddResults = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    year: '',
    grade: '',
    subCode: '',
  });

  const handleChange = (e) => {
    console.log(e);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <div className='col-md-12' style={{ marginTop: '55px' }}>
        <Row>
          <div className='col-md-2'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='/images/ellon.jpg'
                  title='Contemplative Reptile'
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Ellon musk
                </Typography>
              </CardContent>
            </Card>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='col-md-8' style={{ padding: '5px' }}>
              <Form.Group className='col-md-6'>
                <Form.Control
                  id='gender-select'
                  type='text'
                  as='select'
                  placeholder='Year'
                  name='year'
                  value={formState.year}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: 0 }}
                >
                  <option style={{ borderRadius: 0 }} value='1st year'>
                    1st year
                  </option>
                  <option style={{ borderRadius: 0 }} value='2nd year'>
                    2nd year
                  </option>
                  <option style={{ borderRadius: 0 }} value='3rd year'>
                    3rd year
                  </option>
                </Form.Control>
              </Form.Group>
              <Input
                type='text'
                name='subCode'
                value={formState.subCode}
                placeholder='Subject Code'
                onChange={handleChange}
                style={{ border: '0.5px solid black' }}
              />{' '}
              <Input
                type='text'
                placeholder='Result'
                name='grade'
                value={formState.grade}
                style={{ border: '0.5px solid black' }}
                onChange={handleChange}
              />
              <Button type='submit'>Add</Button>
            </div>
          </form>
          <div className='col-md-2' style={{ paddingLeft: '10px' }}>
            <Input
              type='text'
              placeholder='Student No'
              style={{ border: '0.5px solid black' }}
            />
          </div>
        </Row>
        <Row>
          <div className='col-md-8'>
            <span>
              {' '}
              <Input
                type='text'
                placeholder='Date'
                style={{ border: '0.5px solid black' }}
              />
            </span>
            <span>
              {' '}
              <Input
                type='text'
                placeholder='Subject Code'
                style={{ border: '0.5px solid black' }}
              />
            </span>
            <span>
              {' '}
              <Input
                type='text'
                placeholder='Result'
                style={{ border: '0.5px solid black' }}
              />
            </span>
          </div>
          <div className='col-md-4'>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
            >
              Update
            </Button>{' '}
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Delete
            </Button>
          </div>
        </Row>
      </div>
    </>
  );
};

export default AddResults;
