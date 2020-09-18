import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { INodeSelected } from "../../App/types";

import { getCompanyAddress } from "../../addresses/actions";
import { IAddress } from "../../addresses/types";

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

type IState = {
  nodeSelected: INodeSelected;
  address: {
    items: IAddress[];
  };
};

type Props = {
  nodeSelected: INodeSelected;
  address: IAddress[];
  getCompanyAddress: (companyId: string) => void;
};

function CompanyInfo(props: Props) {
  const classes = useStyles();
  const { nodeSelected, getCompanyAddress, address } = props;
  useEffect(() => {
    getCompanyAddress(nodeSelected.companyId);
  }, [nodeSelected]);

  return (
    <>
      {address.length > 0 && (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              Country: {address[0].country}
            </Typography>
            <Typography color="textSecondary">
              City: {address[0].city}
            </Typography>
            <Typography color="textSecondary">
              State: {address[0].state}
            </Typography>
            <Typography color="textSecondary">
              Street: {address[0].street}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}

const mapStateToProps = (state: IState) => ({
  nodeSelected: state.nodeSelected,
  address: state.address.items,
});

export default connect(mapStateToProps, { getCompanyAddress })(CompanyInfo);
