import React from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Main = ({list}) => {
  return (
    <TableContainer component={Paper} className="table-container">
    <Table sx={{ minWidth: 700 }} aria-label="customized table" >
      <TableHead>
        <TableRow>
          <StyledTableCell>Bank ID</StyledTableCell>
          <StyledTableCell align="right">Bank Name</StyledTableCell>
          <StyledTableCell align="right">Branch Name></StyledTableCell>
          <StyledTableCell align="right">IFSC Code&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Address&nbsp;</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((elem,idx) => (
          <StyledTableRow key={idx}>
            <StyledTableCell component="th" scope="row">
              {elem.BankId}
            </StyledTableCell>
            <StyledTableCell align="right">{elem.Bank}</StyledTableCell>
            <StyledTableCell align="right">{elem.Branch}</StyledTableCell>
            <StyledTableCell align="right">{elem.IFSC}</StyledTableCell>
            <StyledTableCell align="right">{elem.Address}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    // <div>
    //     {list.map((elem,idx) => {
    //         return(
    //             <p key={idx}>{elem.Bank}</p>
    //         )
    //     })}
    // </div>
  )
}

export default Main