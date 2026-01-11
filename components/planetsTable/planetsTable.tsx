import { useGetPlanets } from "hooks/useGetPlanets";
import { Input } from "node_modules/antd/es";
import Table from "node_modules/antd/es/table";
import styles from "../../pages/tables.module.css";
import { useState } from "react";

interface PlanetsTableProps {
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  terrain: string;
}

export function PlanetsTable() {
  const [term, setTerm] = useState<string>("");
  const { data, isLoading } = useGetPlanets({ term });

  const tableData = data?.map((item: PlanetsTableProps) => ({
    name: item?.name,
    orbital_period: item?.orbital_period,
    population: item?.population,
    rotation_period: item?.rotation_period,
    terrain: item?.terrain,
  }));

  const columnsData = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Orbital Period",
      dataIndex: "orbital_period",
      key: "orbital_period",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
    },
    {
      title: "Rotation Period",
      dataIndex: "rotation_period",
      key: "rotation_period",
    },
    {
      title: "Terrain",
      dataIndex: "terrain",
      key: "terrain",
    },
  ];

  return (
    <div className={styles.container}>
      <Input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search"
      />
      <Table loading={isLoading} dataSource={tableData} columns={columnsData} />
    </div>
  );
}
