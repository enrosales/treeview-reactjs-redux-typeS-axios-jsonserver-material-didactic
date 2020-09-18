import React from "react";
import { connect } from "react-redux";
import TreeItem from "@material-ui/lab/TreeItem";
import BusinessIcon from '@material-ui/icons/Business';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { ICompany, IState } from "../types";
import { LOADING } from "../../../constants/constants";
import JobAreas from "../../jobAreas/components/JobAreas";

//utils
import { getNodeIdFormSelectedNode } from "../../../utils";

type Props = {
  companies: ICompany[];
};

const useTreeItemStyles = makeStyles((theme: Theme) => createStyles({
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function Companies(props: Props) {
  const { companies } = props;
  const classes = useTreeItemStyles();
  return (
    <>
      {companies && companies.length > 0
        ? companies.map((el) => (
            <TreeItem
            key={el.id}
            nodeId={getNodeIdFormSelectedNode("Company", el.id, el.id)}
            label={(
              <div className={classes.labelRoot}>
                {<BusinessIcon />}
                <Typography variant="body2" className={classes.labelText}>
                  {el.name}
                </Typography>
              </div>
            )}
            >
              {<JobAreas companyId={el.id} />}
            </TreeItem>
          ))
        : `${LOADING}`}
    </>
  );
}

const mapStateToProps = (state: IState) => ({
  companies: state.companies.items,
});

export default connect(mapStateToProps)(Companies);
