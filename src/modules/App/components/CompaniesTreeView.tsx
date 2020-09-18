import React from "react";
import { connect } from "react-redux";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import Companies from "../../companies/components/CompaniesTree";

import { INodeSelected, NodeType } from "../types";
import { setSelectedNode } from "../actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
    },
  })
);

type Props = {
  setSelectedNode: (node: INodeSelected) => void;
};

function CompaniesTreeView(props: Props): JSX.Element {
  const { setSelectedNode } = props;
  const classes = useStyles();
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={(event: any, nodeId: string) => {
        //console.log(nodeId);
        /* Three possible values:
        Company*975335ac-85b4-4740-b1fa-c88cdb5798e1*975335ac-85b4-4740-b1fa-c88cdb5798e1
        JobArea*975335ac-85b4-4740-b1fa-c88cdb5798e1*Interactions
        Employee*975335ac-85b4-4740-b1fa-c88cdb5798e1*2aa7071f-a09d-4c93-8546-300ead403eb0
        */
        const [type, companyId, id] = nodeId.split("*");
        const _nodeSelected: INodeSelected = {
          nodeSelected: type as NodeType,
          companyId,
          id,
        };
        setSelectedNode(_nodeSelected);
      }}
    >
      <Companies />
    </TreeView>
  );
}

export default connect(null, { setSelectedNode })(CompaniesTreeView);
