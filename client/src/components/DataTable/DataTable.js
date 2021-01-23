import React, { useState } from 'react';
import { HashtagTrendData } from '../../data/hashtag_trend';
import DataSort from './DataSort';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography } from '@material-ui/core';

function DataTable() {
  const [selectDay, setSelectDay] = useState(1);
  const [gapRate, setGapRate] = useState("gap");

  return (
    <div style={{ display: "flex" }}>
      <TableContainer component={Paper} style={{ width: '800px', height: '500px' }}>

        <DataSort setSelectDay={setSelectDay} setGapRate={setGapRate} />

        <Table style={{ minWidth: 650 }} size="small" >
          <TableHead style={{ backgroundColor: '#eee' }}>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>해시태그</TableCell>
              <TableCell>최근 {selectDay}일간 증가량</TableCell>
              <TableCell>최근 {selectDay}일간 증가율</TableCell>
              <TableCell>현재 포스팅 수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {HashtagTrendData && HashtagTrendData[`day${selectDay}_${gapRate}`].map((data, index) => {
              return (
                <TableRow key={index} hover={true} onClick={(e) => alert(e.target.innerText)}>
                  <TableCell >{index + 1}</TableCell>
                  <TableCell >{data.hashtag}</TableCell>
                  <TableCell >{data.post_gap}</TableCell>
                  <TableCell >{data.post_rate}</TableCell>
                  <TableCell >{data.post_cnt}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} style={{ width: '400px', height: '500px' }}>
        <Typography>새롭게 분석 대상이 된 해시태그</Typography>
        <Table size="small">
          <TableHead style={{ backgroundColor: '#eee' }}>
            <TableRow>
              <TableCell>해시태그</TableCell>
              <TableCell>현재 포스팅 수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {HashtagTrendData && HashtagTrendData["recent_list"].map((data, index) => {
              return (
                <TableRow key={index} hover={true} onClick={(e) => alert(e.target.innerText)}>
                  <TableCell >{data.hashtag}</TableCell>
                  <TableCell >{data.post_cnt}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DataTable
