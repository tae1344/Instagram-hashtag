import React, { useState, useEffect } from 'react'

function PostLogChart(props) {
  const [postLogDatas, setPostLogDatas] = useState(props.Data);
  const Data = props.Data;


  if (Data && Data.length > 0) {
    let date = Data.filter((item) => item.check_date.slice(0, 7) === '2020-05');
    console.log(date);
  }

  return (
    <div>

    </div>
  )
}

export default PostLogChart
