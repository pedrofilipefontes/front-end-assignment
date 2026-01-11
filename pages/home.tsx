"use client";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useEffect, useState } from "react";

import styles from "./home.module.css";
import { PeopleTable } from "components/peopleTable/peopleTable";
import { PlanetsTable } from "components/planetsTable";
import { StarShipsTable } from "components/starShipsTable/starShiptsTable";

export default function About() {
  const [activeTab, setActiveTab] = useState<string>("1");

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  useEffect(() => {
    setActiveTab("planets");
  }, []);

  const items: TabsProps["items"] = [
    {
      key: "planets",
      label: "Planets",
    },
    {
      key: "people",
      label: "People",
    },
    {
      key: "starships",
      label: "StarShips",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>Star Wars Info</div>
      <Tabs defaultActiveKey={activeTab} items={items} onChange={onChange} />
      {activeTab === "planets" && <PlanetsTable />}
      {activeTab === "people" && <PeopleTable />}
      {activeTab === "starships" && <StarShipsTable />}
    </div>
  );
}
