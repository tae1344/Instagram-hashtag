import React, { useState } from 'react';
import DataTable from '../DataTable/DataTable';
import { Toolbar, Typography } from '@material-ui/core';



function LandingPage() {

  return (
    <div>
      <Toolbar style={{ flex: 1, flexDirection: 'column' }}>
        <Typography variant="h2" gutterBottom>Instagram Hashtag</Typography>
        <DataTable />
      </Toolbar>

    </div>
  )
}

export default LandingPage
