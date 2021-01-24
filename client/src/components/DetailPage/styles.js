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
    margin: theme.spacing(0.8)
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));