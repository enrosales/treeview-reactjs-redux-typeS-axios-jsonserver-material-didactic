import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getEmployeeById } from "../../../utils";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { INodeSelected } from "../../App/types";
import { IEmployee } from "../types";
import EmployeeProjectList from "./EmployeeProjectList";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  nodeSelected: INodeSelected;
  employees: IEmployee[];
};

function EmployeeInfo(props: Props) {
  const [employee, setEmployee] = useState<IEmployee | null>();
  const { nodeSelected, employees } = props;

  useEffect(() => {
    setEmployee(getEmployeeById(employees, nodeSelected.id));
  }, [nodeSelected]);

  const classes = useStyles();
  return (
    <>
      {employee && (
        <>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                {employee.firstName} {employee.lastName}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {employee.jobTitle}
              </Typography>
              <Typography variant="button" component="h2">
                Area: {employee.jobArea}
              </Typography>
              <Typography variant="button" component="h2">
                Type: {employee.jobType}
              </Typography>
              <Typography variant="button" component="h2">
                Birthday: {new Date(employee.dateOfBirth).toDateString()}
              </Typography>
            </CardContent>
          </Card>
          <EmployeeProjectList />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state: any) => ({
  nodeSelected: state.nodeSelected,
  employees: state.employees.items,
});

export default connect(mapStateToProps, {})(EmployeeInfo);
