import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),

  },
  tableContainer: {
    height: 350
  },
  title: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1),
  },
  subtitle: {
    color: '#616161',
    fontSize: 30
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  no_data: {
    padding: 30
  }
}));