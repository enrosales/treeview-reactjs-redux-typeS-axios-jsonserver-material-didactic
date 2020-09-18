import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import CompanyWrapper from "../../companies/components/CompanyWrapper";
import JobAreaDetails from "../../jobAreas/components/JobAreaDetails";
import { INodeSelected, IState } from "../../App/types";
import EmployeeInfo from "../../employees/components/EmployeeInfo";

type Props = {
  nodeSelected: INodeSelected;
};

function DetailsPanel(props: Props) {
  const { nodeSelected } = props;
  switch (nodeSelected.nodeSelected) {
    case "None":
      return <Header />;
    case "Company":
      return <CompanyWrapper />;
    case "JobArea":
      return <JobAreaDetails />;
    case "Employee":
      return <EmployeeInfo />;
    default:
      return null;
  }
}

const mapStateToProps = (state: IState) => ({
  nodeSelected: state.nodeSelected,
});

export default connect(mapStateToProps)(DetailsPanel);
