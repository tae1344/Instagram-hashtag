import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { HashtagTrendData } from '../../data/hashtag_trend';
import DataSortSection from './DataSortSection';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography, Container } from '@material-ui/core';

function DataTable(props) {
  const [selectDay, setSelectDay] = useState(1);
  const [gapRate, setGapRate] = useState("gap");



  return (
    <Container maxWidth="lg" style={{ display: "flex", justifyContent: 'space-between' }}>
      <Paper style={{ marginRight: '20px', flex: 0.7 }}>

        <DataSortSection setSelectDay={setSelectDay} setGapRate={setGapRate} />

        <TableContainer style={{ height: 500 }}>
          <Table size="small" stickyHeader>
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
                  <TableRow key={index} hover={true} onClick={(e) => props.history.push(`/hashtag/detail`, { hashtag: data.hashtag })}>
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
      </Paper>

      <Paper style={{ flex: 0.3, }}>
        <Typography variant="h6" gutterBottom>새롭게 분석 대상이 된 해시태그</Typography>
        <TableContainer style={{ height: 500 }}>
          <Table size="small" stickyHeader>
            <TableHead style={{ backgroundColor: '#eee' }}>
              <TableRow>
                <TableCell>해시태그</TableCell>
                <TableCell>현재 포스팅 수</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {HashtagTrendData && HashtagTrendData["recent_list"].map((data, index) => {
                return (
                  <TableRow key={index} hover={true} onClick={(e) => props.history.push(`/hashtag/detail`, { hashtag: data.hashtag })}>
                    <TableCell >{data.hashtag}</TableCell>
                    <TableCell >{data.post_cnt}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  )
}

export default withRouter(DataTable)
