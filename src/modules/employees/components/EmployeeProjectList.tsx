import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { IProject } from "../../projects/types";
import { INodeSelected } from "../../App/types";
import { totalProjectsByEmployee } from "../../../utils";

type Props = {
  nodeSelected: INodeSelected;
  projects: IProject[];
};

function EmployeeProjectList(props: Props) {
  const { nodeSelected, projects } = props;
  const [projectList, setProjectList] = useState<IProject[]>();
  useEffect(() => {
    setProjectList(totalProjectsByEmployee(projects, nodeSelected.id));
  }, [nodeSelected]);

  return (
    <>
      <p>
        {projectList && projectList.length === 0
          ? "Haven't project..."
          : "List of Projects:"}
      </p>
      {projectList && projectList.length > 0 && (
        <ul>
          {projectList.map((p: IProject) => (
            <li>{p.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

const mapStateToProps = (state: any) => ({
  nodeSelected: state.nodeSelected,
  projects: state.projects.items,
});

export default connect(mapStateToProps, {})(EmployeeProjectList);
