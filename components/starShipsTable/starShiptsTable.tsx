import { useGetStarShips } from "hooks/useGetStarShips";
import { useState } from "react";
import Table from "node_modules/antd/es/table";
import { Input } from "node_modules/antd/es";
import styles from "../../pages/tables.module.css";

interface StarShipsTableProps {
  name: string;
  crew: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  manufacturer: string;
}

export function StarShipsTable() {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = useGetStarShips({ term: search });

  const tableData = data?.map((item: StarShipsTableProps) => ({
    name: item?.name,
    crew: item?.crew,
    max_atmosphering_speed: item?.max_atmosphering_speed,
    cargo_capacity: item?.cargo_capacity,
    manufacturer: item?.manufacturer,
  }));

  const columnsData = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Crew",
      dataIndex: "crew",
      key: "crew",
    },
    {
      title: "Cargo Capacity",
      dataIndex: "cargo_capacity",
      key: "cargo_capacity",
    },
    {
      title: "Manufacturer",
      dataIndex: "manufacturer",
      key: "manufacturer",
    },
  ];

  return (
    <div className={styles.container}>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <Table loading={isLoading} dataSource={tableData} columns={columnsData} />
    </div>
  );
}
