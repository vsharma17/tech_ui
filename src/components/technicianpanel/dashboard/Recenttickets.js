import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'XYZ...', '3719', 'Completed',  3),
  createData(1, '16 Mar, 2019', 'XYZ...', '2574', 'Completed',  2),
  createData(2, '16 Mar, 2019', 'XYZ...', '1253', 'In Process',  1),
  createData(3, '16 Mar, 2019', 'XYZ...', '2000', 'Pending',  3),
  createData(4, '15 Mar, 2019', 'XYZ...', '5919', 'Rejected',  1),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Recenttickets() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Tickets</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Assigned By</TableCell>
            <TableCell>Ticket Number</TableCell>
            <TableCell>Ticket Status</TableCell>
            <TableCell align="right">Spent Time(in Hrs)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}