import React, { useEffect } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { getCompanies } from "../../companies/actions";
import { getEmployees } from "../../employees/actions";

import CompaniesTreeView from "./CompaniesTreeView";
import DetailsPanel from "./DetailsPanel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      backgroundColor: "#cfe8fc",
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    parent: {
      padding: 20,
    },
  })
);

type Props = {
  getCompanies: () => void;
  getEmployees: () => void;
};

function Layout(props: Props) {
  const { getCompanies, getEmployees } = props;
  useEffect(() => {
    const loadData = async () => {
      await getCompanies();
      await getEmployees();
    };
    loadData();
  }, []);

  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Typography component="div" className={classes.parent}>
        <Grid container spacing={1}>
          <Grid item sm={4}>
            <Paper className={classes.paper}>
              <CompaniesTreeView />
            </Paper>
          </Grid>
          <Grid item sm={8}>
            <Paper className={classes.paper}>
              <DetailsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Typography>
    </main>
  );
}

export default connect(null, {
  getCompanies,
  getEmployees,
})(Layout);
