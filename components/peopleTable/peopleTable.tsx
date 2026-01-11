import { useGetPeople } from "hooks/useGetPeople";
import { SetStateAction, useState } from "react";
import Table from "node_modules/antd/es/table";
import { Input, Drawer } from "node_modules/antd/es";
import { useDebounce } from "hooks/useDebounce";
import { useSetPage } from "hooks/useSetPage";
import { useSetSearch } from "hooks/useSetSearch";
import { peopleTablecolumnsData } from "constants/columns";
import { PeopleTableProps } from "types/types";
import { useDrawer } from "hooks/useDrawerInfo";
import styles from "../../pages/tables.module.css";

export function PeopleTable() {
  const { page, setPage } = useSetPage();
  const { search, setSearch } = useSetSearch();
  const debouncedTerm = useDebounce(search, 500);
  const { data, isLoading, count } = useGetPeople({
    term: debouncedTerm,
    page,
  });
  const [record, setRecord] = useState<PeopleTableProps | null>(null);

  const { isOpen, setIsOpen, onClose } = useDrawer();

  const tableData = data?.map((item: PeopleTableProps) => ({
    name: item?.name,
    birth_year: item?.birth_year,
    eye_color: item?.eye_color,
    skin_color: item?.skin_color,
  }));

  return (
    <>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <Table
        pagination={{
          pageSize: 10,
          onChange: (page) => setPage(page),
          current: page,
          total: count,
          showSizeChanger: false,
        }}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              setRecord(
                record as unknown as SetStateAction<PeopleTableProps | null>
              );
              setIsOpen(true);
            },
          };
        }}
        loading={isLoading}
        dataSource={tableData}
        columns={peopleTablecolumnsData}
      />
      <Drawer
        title="Person Details"
        closable={{ "aria-label": "Close Button" }}
        open={isOpen}
        onClose={onClose}
      >
        <div className={styles.drawer}>
          <b>Name:</b> {record?.name}
          <b>Birth Year:</b> {record?.birth_year}
          <b>Eye Color:</b> {record?.eye_color}
          <b>Skin Color:</b> {record?.skin_color}
          <b>Birth Year:</b> {record?.birth_year}
        </div>
      </Drawer>
    </>
  );
}
