import React, { useEffect } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { IProject } from "../../projects/types";
import { INodeSelected } from "../../App/types";
import {
  getCompanyProjects,
  addCompanyProject,
  deleteCompanyProject,
  updateCompanyProject,
} from "../../projects/actions";
import EmployeeTable from "../../employees/components/EmployeeTable";

type Props = {
  nodeSelected: INodeSelected;
  projects: IProject[];
  getCompanyProjects: (companyId: string) => void;
  addCompanyProject: (project: IProject) => void;
  deleteCompanyProject: (project: IProject) => void;
  updateCompanyProject: (project: IProject) => void;
};

function CompanyProjects(props: Props) {
  const {
    nodeSelected,
    projects,
    getCompanyProjects,
    addCompanyProject,
    deleteCompanyProject,
    updateCompanyProject,
  } = props;

  useEffect(() => {
    getCompanyProjects(nodeSelected.companyId);
  }, [
    nodeSelected,
    addCompanyProject,
    deleteCompanyProject,
    updateCompanyProject,
  ]);

  const handleAddProject = (newData: IProject) =>
    new Promise((resolve) => {
      const newProject = {
        ...newData,
        employees: [],
        companyId: nodeSelected.companyId,
      };
      addCompanyProject(newProject);
      resolve();
    });

  const handleRemoveProject = (oldData: IProject) =>
    new Promise((resolve) => {
      deleteCompanyProject(oldData);
      resolve();
    });

  const handleUpdateProject = (
    newData: IProject,
    oldData: IProject | undefined
  ) => {
    const { name, department, companyId, employees, id } = newData;
    return new Promise((resolve) => {
      if (oldData) {
        const { name: oldName, department: oldDepartment } = oldData;
        if (name !== oldName || department !== oldDepartment) {
          const projectToUpdate: IProject = {
            companyId,
            department,
            employees,
            id,
            name,
          };
          updateCompanyProject(projectToUpdate);
        }
      }
      resolve();
    });
  };

  const validateDepartment = (rowData: IProject) => {
    const { department } = rowData;
    const isDepartmentValid = department && department.length > 3;
    if (!isDepartmentValid) {
      return {
        isValid: false,
        helperText: "Department must be longer than 3 chars",
      };
    }
    return true;
  };

  const validateName = (rowData: IProject) => {
    const { name } = rowData;
    const isNameValid = name && name.length > 3;
    if (!isNameValid) {
      return {
        isValid: false,
        helperText: "Name must be longer than 3 chars",
      };
    }
    return true;
  };

  return (
    <MaterialTable
      title="Projects"
      columns={[
        { title: "Name", field: "name", validate: validateName },
        {
          title: "Department",
          field: "department",
          validate: validateDepartment,
        },
      ]}
      data={projects}
      options={{
        actionsColumnIndex: -1,
        paging: false,
      }}
      detailPanel={(rowData) => <EmployeeTable rowData={rowData} />}
      editable={{
        onRowAdd: handleAddProject,
        onRowUpdate: handleUpdateProject,
        onRowDelete: handleRemoveProject,
      }}
    />
  );
}

type IState = {
  nodeSelected: INodeSelected;
  projects: {
    items: IProject[];
  };
};

const mapStateToProps = (state: IState) => ({
  nodeSelected: state.nodeSelected,
  projects: state.projects.items,
});

export default connect(mapStateToProps, {
  getCompanyProjects,
  addCompanyProject,
  deleteCompanyProject,
  updateCompanyProject,
})(CompanyProjects);
