import { useGetPlanets } from "hooks/useGetPlanets";
import { Drawer, Input } from "node_modules/antd/es";
import Table from "node_modules/antd/es/table";
import { useDebounce } from "hooks/useDebounce";
import { useSetPage } from "hooks/useSetPage";
import { useSetSearch } from "hooks/useSetSearch";
import { PeopleTableProps, PlanetsTableProps } from "types/types";
import { planetsColumnsData } from "constants/columns";
import { useDrawer } from "hooks/useDrawerInfo";
import { SetStateAction, useState } from "react";
import styles from "../../pages/tables.module.css";

export function PlanetsTable() {
  const { search, setSearch } = useSetSearch();
  const debouncedTerm = useDebounce(search, 500);
  const { page, setPage } = useSetPage();
  const { data, isLoading, count } = useGetPlanets({
    term: debouncedTerm,
    page,
  });
  const { isOpen, setIsOpen, onClose } = useDrawer();
  const [record, setRecord] = useState<PlanetsTableProps | null>(null);

  const tableData = data?.map((item: PlanetsTableProps) => ({
    name: item?.name,
    orbital_period: item?.orbital_period,
    population: item?.population,
    rotation_period: item?.rotation_period,
    terrain: item?.terrain,
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
        loading={isLoading}
        dataSource={tableData}
        columns={planetsColumnsData}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              setRecord(
                record as unknown as SetStateAction<PlanetsTableProps | null>
              );
              setIsOpen(true);
            },
          };
        }}
      />
      <Drawer
        title="Planet Details"
        closable={{ "aria-label": "Close Button" }}
        open={isOpen}
        onClose={onClose}
      >
        <div className={styles.drawer}>
          <b>Name:</b> {record?.name}
          <b>Orbital Period:</b> {record?.orbital_period}
          <b>Population:</b> {record?.population}
          <b>Rotation Period:</b> {record?.rotation_period}
          <b>Terrain:</b> {record?.terrain}
        </div>
      </Drawer>
    </>
  );
}
