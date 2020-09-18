import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TreeItem from "@material-ui/lab/TreeItem";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { IEmployee, IState } from "../types";
import { getEmployeesFromCompanyAndJobArea } from "../../../utils";
import { LOADING } from "../../../constants/constants";

import { getNodeIdFormSelectedNode } from "../../../utils";

type Props = {
  companyId: string;
  area: string;
  totalEmployees: IEmployee[];
};

const useTreeItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      fontWeight: "inherit",
      color: "inherit",
    },
    labelRoot: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    labelText: {
      fontWeight: "inherit",
      flexGrow: 1,
    },
  })
);

function Employees(props: Props) {
  const classes = useTreeItemStyles();
  const initialState: IEmployee[] = [];
  const [employees, setEmployees] = useState(initialState);
  const { companyId, area, totalEmployees } = props;

  useEffect(() => {
    setEmployees(
      getEmployeesFromCompanyAndJobArea(companyId, area, totalEmployees)
    );
  }, [area, companyId]);

  return (
    <>
      {employees && employees.length > 0
        ? employees.map((el) => (
            <TreeItem
              key={el.id}
              nodeId={getNodeIdFormSelectedNode("Employee", companyId, el.id)}
              label={
                <div className={classes.labelRoot}>
                  {<PersonIcon />}
                  <Typography variant="body2" className={classes.labelText}>
                    {`${el.firstName} ${el.lastName}`}
                  </Typography>
                </div>
              }
            />
          ))
        : `${LOADING}`}
    </>
  );
}

const mapStateToProps = (state: IState) => ({
  totalEmployees: state.employees.items,
});

export default connect(mapStateToProps, {})(Employees);
