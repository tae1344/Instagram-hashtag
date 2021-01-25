import React from 'react';
import DataTable from '../DataTable/DataTable';
import { Typography } from '@material-ui/core';



function LandingPage() {

  return (
    <div style={{ backgroundColor: '#F5F5F5', paddingBottom: 30 }}>
      <Typography variant="h1" align="center" gutterBottom>Instagram Hashtag</Typography>
      <DataTable />

    </div>
  )
}

export default LandingPage
