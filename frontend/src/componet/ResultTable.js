import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Subject, Subjectcode, Grade) {
  return { Subject, Subjectcode, Grade };
}

const rows = [
  createData('Fundementals of computing', 'SENG12222', 'A'),
  createData('DataStructured', 'SENG22222', 'A'),
];

const ResultTable = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Subjects</TableCell>
            <TableCell align='right'>Subjectcode</TableCell>
            <TableCell align='right'>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Subject}>
              <TableCell component='th' scope='row'>
                {row.Subject}
              </TableCell>
              <TableCell align='right'>{row.Subjectcode}</TableCell>
              <TableCell align='right'>{row.Grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
