import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  tableContainer: {
    height: 500
  },
  buttonSection: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingTop: 10
  },
  sectionOne: {
    flex: 0.7,
    width: '70%',
    marginRight: 20
  },
  sectionTwo: {
    flex: 0.3,
    width: '25%',
  },
  title: {
    margin: theme.spacing(1)
  }
}));