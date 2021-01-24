import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Paper, Typography, Chip } from '@material-ui/core';
import { useStyles } from './styles';

function DetailHashtagTable(props) {
  const [title, setTitle] = useState("");
  const classes = useStyles();
  const sliceCnt = 10;
  const Data = props.Data;

  useEffect(() => {
    switch (props.title) {
      case "lately_popular":
        setTitle("최근 인기게시물 목록");
        break;
      case "top_remain":
        setTitle("오래 유지한 인기게시물 순위");
        break;
      case "top_comment":
        setTitle("가장 댓글 많은 게시물 순위");
        break;
      case "top_like":
        setTitle("가장 좋아요를 많이 받은 게시물 순위");
        break;

      default:
        break;
    }
  }, [])



  return (
    <Paper className={classes.container}>
      <Typography variant="h5" gutterBottom className={classes.title}>{title}</Typography>
      <TableContainer className={classes.tableContainer}>
        <Table size="small" stickyHeader={true} >
          <TableHead>
            <TableRow>
              <TableCell>작성자</TableCell>
              <TableCell>게시물 주소</TableCell>
              <TableCell>좋아요 수</TableCell>
              <TableCell>댓글 수</TableCell>
              <TableCell>작성자가 자주 사용한 해시태그</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data && Data.length > 0 ? Data.slice(0, sliceCnt).map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{item.id_data.username}</TableCell>
                  <TableCell>{item.url}</TableCell>
                  <TableCell>{item.like_cnt}</TableCell>
                  <TableCell>{item.comment_cnt}</TableCell>
                  <TableCell>{item.id_data.recent_hashtag_list.length > 0 ? item.id_data.recent_hashtag_list.slice(0, 3).map((tag, index) => {
                    return <Chip key={index} label={tag.hashtag} variant="outlined" className={classes.chip} size="small" />
                  }) : "No Data"}</TableCell>
                </TableRow>)
            }) : <TableRow><TableCell>데이터가 없어요</TableCell></TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default DetailHashtagTable
