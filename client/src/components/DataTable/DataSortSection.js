import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useStyles } from './styles';

function DataSortSection(props) {
  const classes = useStyles();
  const [dayValue, setDayValue] = useState("1");
  const [gapRateValue, setGapRateValue] = useState("gap");

  const handleChangeDay = (event) => {
    setDayValue(event.target.value);
    props.setSelectDay(parseInt(event.target.value));
  };

  const handleChangeGapRate = (event) => {
    setGapRateValue(event.target.value);
    props.setGapRate(event.target.value);
  }

  return (
    <div className={classes.buttonSection}>
      <FormControl component="fieldset" >
        <FormLabel component="legend">기준</FormLabel>
        <RadioGroup row aria-label="gender" name="day" value={dayValue} onChange={handleChangeDay}>
          <FormControlLabel value="1" control={<Radio />} label="1일" />
          <FormControlLabel value="7" control={<Radio />} label="7일" />
          <FormControlLabel value="30" control={<Radio />} label="30일" />
          <FormControlLabel value="60" control={<Radio />} label="60일" />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" >
        <FormLabel component="legend">증가량/증가율 순</FormLabel>
        <RadioGroup row aria-label="gender" name="rate" value={gapRateValue} onChange={handleChangeGapRate}>
          <FormControlLabel value="gap" control={<Radio />} label="증가량" />
          <FormControlLabel value="rate" control={<Radio />} label="증가율" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default DataSortSection
