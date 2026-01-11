import { useGetPeople } from "hooks/useGetPeople";
import { useState } from "react";
import Table from "node_modules/antd/es/table";
import { Input } from "node_modules/antd/es";
import styles from "../../pages/tables.module.css";

interface PeopleTableProps {
  name: string;
  birth_year: string;
  eye_color: string;
  skin_color: string;
}

export function PeopleTable() {
  const [term, setTerm] = useState<string>("");
  const { data, isLoading } = useGetPeople({ term });

  const tableData = data?.map((item: PeopleTableProps) => ({
    name: item?.name,
    birth_year: item?.birth_year,
    eye_color: item?.eye_color,
    skin_color: item?.skin_color,
  }));

  const columnsData = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "birthYear",
      dataIndex: "birth_year",
      key: "birth_year",
    },
    {
      title: "Eye Color",
      dataIndex: "eye_color",
      key: "eye_color",
    },
    {
      title: "Skin Color",
      dataIndex: "skin_color",
      key: "skin_color",
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
