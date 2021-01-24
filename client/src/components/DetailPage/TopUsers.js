import React, { useState } from 'react';
import {
  Radio, RadioGroup, FormControlLabel, FormControl, Paper, Typography,
  Table, TableBody, TableCell, TableHead, TableRow, TableContainer
} from '@material-ui/core';

function TopUsers(props) {
  const [dayValue, setDayValue] = useState("7");

  const Data = props.Data;
  const sliceCnt = 10;

  const handleChangeDay = (event) => {
    setDayValue(event.target.value);
    //props.setSelectDay(parseInt(event.target.value));
  };

  return (
    <Paper>
      <Typography variant="h5" gutterBottom>최근 {dayValue}일간 활동을 많이 한 유저</Typography>
      <FormControl component="fieldset" >
        <RadioGroup row aria-label="gender" name="day" value={dayValue} onChange={handleChangeDay}>
          <FormControlLabel value="7" control={<Radio />} label="7일" />
          <FormControlLabel value="30" control={<Radio />} label="30일" />
          <FormControlLabel value="90" control={<Radio />} label="90일" />
          <FormControlLabel value="180" control={<Radio />} label="180일" />
        </RadioGroup>
      </FormControl>

      <TableContainer>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>순위</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>팔로워 수</TableCell>
              <TableCell>팔로우 수</TableCell>
              <TableCell>포스팅 수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data && Data[`top_id_${dayValue}`] ? Data[`top_id_${dayValue}`].slice(0, sliceCnt).map((item, index) => {
              return (
                <TableRow key={index} hover={true} >
                  <TableCell >{index + 1}</TableCell>
                  <TableCell >{item.username}</TableCell>
                  <TableCell >{item.follower_cnt}</TableCell>
                  <TableCell >{item.follow_cnt}</TableCell>
                  <TableCell >{item.post_cnt}</TableCell>
                </TableRow>
              )
            }) : <TableRow><TableCell>데이터가 없어요</TableCell></TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TopUsers
