import { TableColumnType } from "node_modules/antd/es";
import { Key } from "node_modules/antd/es/table/interface";
import {
  PeopleTableProps,
  PlanetsTableProps,
  StarShipsTableProps,
} from "types/types";

export const planetsColumnsData: TableColumnType<PlanetsTableProps>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    onFilter: (value: boolean | Key, record: PlanetsTableProps) =>
      record.name.includes(value as string),
    filters: [
      {
        text: "Tatooine",
        value: "Tatooine",
      },
    ],
  },
  {
    title: "Orbital Period",
    dataIndex: "orbital_period",
    key: "orbital_period",
    sorter: (a: PlanetsTableProps, b: PlanetsTableProps) =>
      a.orbital_period.localeCompare(b.orbital_period),
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
    sorter: (a: PlanetsTableProps, b: PlanetsTableProps) =>
      a.rotation_period.localeCompare(b.rotation_period),
  },
  {
    title: "Terrain",
    dataIndex: "terrain",
    key: "terrain",
  },
];

export const starShipsColumnsData = [
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
    sorter: (a: StarShipsTableProps, b: StarShipsTableProps) =>
      a.cargo_capacity.localeCompare(b.cargo_capacity),
  },
  {
    title: "Manufacturer",
    dataIndex: "manufacturer",
    key: "manufacturer",
  },
];

export const peopleTablecolumnsData: TableColumnType<PeopleTableProps>[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    onFilter: (value, record) => record.name.includes(value as string),
    filters: [
      {
        text: "Luke Skywalker",
        value: "Luke Skywalker",
      },
    ],
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
