"use client";
import { useGetPeople } from "hooks/useGetPeople";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useState } from "react";

import styles from "./home.module.css";
import { PeopleTable } from "components/peopleTable/peopleTable";
import { PlanetsTable } from "components/planetsTable";
import { StarShipsTable } from "components/starShipsTable/starShiptsTable";

export default function About() {
  const [activeTab, setActiveTab] = useState<string>("1");

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Planets",
    },
    {
      key: "2",
      label: "People",
    },
    {
      key: "3",
      label: "StarShips",
    },
  ];

  return (
    <div className={styles.container}>
      <div>
        <Tabs defaultActiveKey={activeTab} items={items} onChange={onChange} />
        {activeTab === "1" && <PlanetsTable />}
        {activeTab === "2" && <PeopleTable />}
        {activeTab === "3" && <StarShipsTable />}
      </div>
    </div>
  );
}
