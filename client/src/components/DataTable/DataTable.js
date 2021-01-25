import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import HashtagTrendData from '../../data/hashtag_trend.json';
import DataSortSection from './DataSortSection';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography, Container } from '@material-ui/core';

import { useStyles } from './styles';

function DataTable(props) {
  const classes = useStyles();
  const [selectDay, setSelectDay] = useState(1);
  const [gapRate, setGapRate] = useState("gap");



  return (
    <Container maxWidth="lg" >
      <div className={classes.container}>
        <Paper className={classes.sectionOne}>

          <DataSortSection setSelectDay={setSelectDay} setGapRate={setGapRate} />

          <TableContainer className={classes.tableContainer}>
            <Table size="small" stickyHeader>
              <TableHead>
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

        <Paper className={classes.sectionTwo} >
          <Typography className={classes.title} variant="h6" gutterBottom>새로운 분석 대상 해시태그</Typography>
          <TableContainer className={classes.tableContainer}>
            <Table size="small" stickyHeader>
              <TableHead>
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
      </div>
    </Container>
  )
}

export default withRouter(DataTable)
