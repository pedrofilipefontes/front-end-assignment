import { useGetStarShips } from "hooks/useGetStarShips";
import { SetStateAction, useState } from "react";
import Table from "node_modules/antd/es/table";
import { Drawer, Input } from "node_modules/antd/es";

import { useDebounce } from "hooks/useDebounce";
import { useSetSearch } from "hooks/useSetSearch";
import { useSetPage } from "hooks/useSetPage";
import { starShipsColumnsData } from "constants/columns";
import { StarShipsTableProps } from "types/types";
import { useDrawer } from "hooks/useDrawerInfo";
import styles from "../../pages/tables.module.css";

export function StarShipsTable() {
  const { search, setSearch } = useSetSearch();
  const { page, setPage } = useSetPage();
  const debouncedTerm = useDebounce(search, 500);
  const { data, isLoading, count } = useGetStarShips({
    term: debouncedTerm,
    page,
  });
  const { isOpen, setIsOpen, onClose } = useDrawer();

  const [record, setRecord] = useState<StarShipsTableProps | null>(null);

  const tableData = data?.map((item: StarShipsTableProps) => ({
    name: item?.name,
    crew: item?.crew,
    max_atmosphering_speed: item?.max_atmosphering_speed,
    cargo_capacity: item?.cargo_capacity,
    manufacturer: item?.manufacturer,
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
                record as unknown as SetStateAction<StarShipsTableProps | null>
              );
              setIsOpen(true);
            },
          };
        }}
        loading={isLoading}
        dataSource={tableData}
        columns={starShipsColumnsData}
      />
      <Drawer
        title="Star Ship Details"
        closable={{ "aria-label": "Close Button" }}
        open={isOpen}
        onClose={onClose}
      >
        <div className={styles.drawer}>
          <b>Name:</b> {record?.name}
          <b> Crew:</b> {record?.crew}
          <b>Max Atmosphering Speed:</b> {record?.max_atmosphering_speed}
          <b>Cargo Capacity:</b> {record?.cargo_capacity}
          <b>Manufacturer:</b> {record?.manufacturer}
        </div>
      </Drawer>
    </>
  );
}
