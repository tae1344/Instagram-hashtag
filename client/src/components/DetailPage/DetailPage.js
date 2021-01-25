import React, { useEffect, useState } from 'react';
import DetailHashtagTable from './DetailHashtagTable';
import TopUsers from './TopUsers';
import PostLogChart from './PostLogChart';
import { Typography, Chip, Container, Paper } from '@material-ui/core';
import { useStyles } from './styles';



function DetailPage(props) {
  const classes = useStyles();
  const hashtagName = props.location.state.hashtag;
  const sliceCnt = 10;
  const [Data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      return await import(`../../data/hashtag_info/${hashtagName}.json`).then(res => {
        setData(res.default);
      }).catch((error) => {
        alert('해당 데이터를 찾을 수 없습니다.');
        props.history.goBack();
      });
    }
    fetchData()
  }, []);


  // top_relation  가장 관련있는 해시태그 순위 --> 10개

  // top_autocomplete 해당 해시태그가 포함된 해시태그 중 관련도 순위 --> 

  // lately_popular 최근 인기게시물 목록 --> 10개
  // top_remain  해당 태그 인기게시물에서 가장 오래 유지한 게시물 순위 --> 10개
  // top_like 해당 해시태그에서 가장 좋아요를 많이 받은 게시물 순위 --> 정렬 10개
  // top_comment 해당 해시태그에서 가장 댓글이 많이 달린 게시물 순위 --> 정렬 10개

  // top_id_{n} 최근 n일동안 해당 해시태그에서 가장 활동을 많이 한 아이디 순위(7,30,90, 180)

  // post_log 최근 1년간 포스팅 수 추이 --> 그래프

  return (
    <div style={{ backgroundColor: '#F5F5F5', paddingBottom: 30 }}>
      <Container maxWidth="md" >
        <Typography variant="h2" align="center" className={classes.title} gutterBottom>
          <span className={classes.subtitle}>선택 태그 </span>
          "{hashtagName}"
        </Typography>

        {/* 관련있는 해시태그 순위 */}
        <Paper>
          <Typography variant="subtitle2" className={classes.title} gutterBottom>관련 태그</Typography>
          {Data && Data.top_relation
            ? Data.top_relation.slice(0, sliceCnt).map((item, index) => {
              return (<Chip key={index} color="primary" label={item.hashtag} variant="outlined" className={classes.chip} />)
            })
            : <Typography variant="h6" align="center" className={classes.no_data}>관련 데이터가 없어요</Typography>
          }

          <Typography variant="subtitle2" className={classes.title} gutterBottom>관련 유사 태그</Typography>
          {Data && Data.top_relation
            ? Data.top_autocomplete.slice(0, sliceCnt).map((item, index) => {
              return (<Chip key={index} color="primary" label={item.hashtag} variant="outlined" className={classes.chip} />)
            })
            : <Typography variant="h6" align="center" className={classes.no_data}>관련 데이터가 없어요</Typography>
          }
        </Paper>

        {/* 최근 인기 게시물 */}
        <DetailHashtagTable Data={Data.lately_popular} title="lately_popular" />
        {/* 해당 태그 인기게시물에서 가장 오래 유지한 게시물 순위 */}
        <DetailHashtagTable Data={Data.top_remain} title="top_remain" />
        {/* 해당 해시태그에서 가장 좋아요를 많이 받은 게시물 순위 */}
        <DetailHashtagTable Data={Data.top_like} title="top_like" />
        {/* 해당 해시태그에서 가장 댓글이 많이 달린 게시물 순위 */}
        <DetailHashtagTable Data={Data.top_comment} title="top_comment" />

        {/* 최근 n일동안 해당 해시태그에서 가장 활동을 많이 한 아이디 */}
        <TopUsers Data={Data} />

        {/* 최근 1년간 포스팅 수 추이 */}
        <PostLogChart Data={Data.post_log} />

      </Container>
    </div>
  )

}


export default DetailPage
