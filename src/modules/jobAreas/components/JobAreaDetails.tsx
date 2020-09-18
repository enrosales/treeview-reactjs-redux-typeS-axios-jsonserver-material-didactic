import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { IEmployee } from "../../employees/types";
import { INodeSelected } from "../../App/types";
import {
  getEmployeesFromCompanyAndJobArea,
  totalOfProjectsInArea,
} from "../../../utils";
import { IProject } from "../../projects/types";

type Props = {
  employees: IEmployee[];
  projects: IProject[];
  nodeSelected: INodeSelected;
};
// del total de empleados de esta area, contar en cuantos proyectos diferentes estan particpando
// ir uno a uno e ir revisando a que proyecto pertenece, e irlos contando siempre que sean diferentes...
function JobAreaDetails(props: Props) {
  const { employees, nodeSelected, projects } = props;
  const [employeesInJobArea, setEmployeesInJobArea] = useState<IEmployee[]>([]);
  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    const _emp = getEmployeesFromCompanyAndJobArea(
      nodeSelected.companyId,
      nodeSelected.id,
      employees
    );
    setEmployeesInJobArea(_emp);
  }, [nodeSelected]);

  useEffect(() => {
    setTotalProjects(totalOfProjectsInArea(employeesInJobArea, projects));
  }, [employeesInJobArea]);

  return (
    <div>
      Job Area Details:
      <br />
      <br />
      <span>
        Total of employees in this area:{" "}
        <strong>{employeesInJobArea.length} </strong>{" "}
      </span>
      <br />
      <br />
      Total of projects in this area:{" "}
      <span>
        <strong>{totalProjects} </strong>{" "}
      </span>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  employees: state.employees.items,
  projects: state.projects.items,
  nodeSelected: state.nodeSelected,
});

export default connect(mapStateToProps, {})(JobAreaDetails);
