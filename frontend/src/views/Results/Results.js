import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  makeStyles,
} from '@material-ui/core';

import ellon from '../../assets/ellon.jpg';
import ResultTable from '../../componet/ResultTable';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Results = () => {
  const classes = useStyles();
  return (
    <Container>
      <Row className='main-container'>
        <Col sm={4}>
          <Card>
            <CardMedia
              className={classes.media}
              image={ellon}
              title='Paella dish'
            />
            <CardContent>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                Student Name
              </Typography>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                Student No:
              </Typography>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                Current GPA:
              </Typography>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                1st Year:
              </Typography>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                2nd Year:
              </Typography>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                3st Year:
              </Typography>
            </CardContent>
          </Card>
        </Col>
        <Col sm={8}>
          <ResultTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
