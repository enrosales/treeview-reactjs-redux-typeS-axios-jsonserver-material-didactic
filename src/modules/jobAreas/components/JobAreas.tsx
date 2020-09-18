import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import WorkIcon from "@material-ui/icons/Work";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { IEmployee, IState } from "../../employees/types";
import { getJobAreas } from "../actions";
import TreeItem from "@material-ui/lab/TreeItem";
import Employees from "../../employees/components/Employees";

import { getNodeIdFormSelectedNode } from "../../../utils";

type Props = {
  companyId: string;
  employees: IEmployee[];
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

function JobAreas(props: Props) {
  const classes = useTreeItemStyles();
  const { companyId, employees } = props;
  const jobAreas = getJobAreas(companyId, employees);
  return (
    <>
      {jobAreas && jobAreas.length > 0
        ? jobAreas.map((area) => (
            <TreeItem
              key={area}
              nodeId={getNodeIdFormSelectedNode("JobArea", companyId, area)}
              label={
                <div className={classes.labelRoot}>
                  {<WorkIcon />}
                  <Typography variant="body2" className={classes.labelText}>
                    {area}
                  </Typography>
                </div>
              }
            >
              <Employees companyId={companyId} area={area} />
            </TreeItem>
          ))
        : ""}
    </>
  );
}

const mapStateToProps = (state: IState) => ({
  employees: state.employees.items,
});

export default connect(mapStateToProps, {})(JobAreas);
