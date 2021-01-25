import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { Chart, BarSeries, ArgumentAxis, ValueAxis, } from '@devexpress/dx-react-chart-material-ui';
import { useStyles } from './styles';

function PostLogChart(props) {
  const classes = useStyles();
  const postLogDatas = new Array();
  const Data = props.Data;


  if (Data && Data.length > 0) {
    // 첫 번째 데이터 date, post_cnt 값
    let date = Data[0].check_date.slice(0, 7); //'2020-01'
    let postSum = Data[0].post_cnt;
    let day = 1;

    // 2번째 데이터 값부터 mapping
    Data.slice(1).map((item, index) => {
      if (item.check_date.slice(0, 7) !== date) {

        postLogDatas.push({ date: date, postSum: postSum, day: day });

        // 초기화
        date = item.check_date.slice(0, 7);
        postSum = item.post_cnt;
        day = 0;

      } else {
        day += 1;
        postSum += item.post_cnt;
      }
    })

  }

  return (

    <Paper className={classes.container}>
      <Typography variant="h6" className={classes.title} gutterBottom>최근 1년간 추이</Typography>
      {Data && postLogDatas.length > 0
        ?
        <Chart data={postLogDatas}>
          <ArgumentAxis />
          <ValueAxis max={12} />
          <BarSeries barWidth={0.1} valueField="postSum" argumentField="date" />

        </Chart>

        : <Typography variant="h6" align="center" className={classes.no_data}>관련 데이터가 없어요</Typography>
      }
    </Paper>
  )
}

export default PostLogChart
