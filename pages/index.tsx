import Head from "next/head";
import { Inter } from "next/font/google";
import {
  Tabs,
  Table,
  Drawer,
  Input,
  Space,
  Typography,
  Spin,
  Alert,
} from "antd";
import { useState, useMemo } from "react";
import { usePlanets } from "../hooks/usePlanets";
import { usePeople } from "../hooks/usePeople";
import { useStarships } from "../hooks/useStarships";
import type { Planet, Person, Starship } from "../services/swapi";

const inter = Inter({ subsets: ["latin"] });
const { Title } = Typography;
const { Search } = Input;

type TabKey = "planets" | "people" | "starships";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("planets");
  const [selectedItem, setSelectedItem] = useState<
    Planet | Person | Starship | null
  >(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Planets data
  const {
    data: planetsData,
    isLoading: planetsLoading,
    error: planetsError,
  } = usePlanets(1);

  // People data
  const {
    data: peopleData,
    isLoading: peopleLoading,
    error: peopleError,
  } = usePeople(1);

  // Starships data
  const {
    data: starshipsData,
    isLoading: starshipsLoading,
    error: starshipsError,
  } = useStarships(1);

  // Filter data based on search
  const filteredPlanets = useMemo(() => {
    if (!planetsData?.results) return [];
    if (!searchText) return planetsData.results;
    return planetsData.results.filter((planet) =>
      planet.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [planetsData, searchText]);

  const filteredPeople = useMemo(() => {
    if (!peopleData?.results) return [];
    if (!searchText) return peopleData.results;
    return peopleData.results.filter((person) =>
      person.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [peopleData, searchText]);

  const filteredStarships = useMemo(() => {
    if (!starshipsData?.results) return [];
    if (!searchText) return starshipsData.results;
    return starshipsData.results.filter((starship) =>
      starship.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [starshipsData, searchText]);

  // Planets columns
  const planetColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Climate",
      dataIndex: "climate",
      key: "climate",
    },
    {
      title: "Terrain",
      dataIndex: "terrain",
      key: "terrain",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
      render: (value: string) => (value === "unknown" ? "Unknown" : value),
    },
    {
      title: "Diameter",
      dataIndex: "diameter",
      key: "diameter",
      render: (value: string) =>
        value === "unknown" ? "Unknown" : `${value} km`,
    },
  ];

  // People columns
  const peopleColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
      render: (value: string) =>
        value === "unknown" ? "Unknown" : `${value} cm`,
    },
    {
      title: "Mass",
      dataIndex: "mass",
      key: "mass",
      render: (value: string) =>
        value === "unknown" ? "Unknown" : `${value} kg`,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Birth Year",
      dataIndex: "birth_year",
      key: "birth_year",
    },
  ];

  // Starships columns
  const starshipsColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Manufacturer",
      dataIndex: "manufacturer",
      key: "manufacturer",
    },
    {
      title: "Cost (Credits)",
      dataIndex: "cost_in_credits",
      key: "cost_in_credits",
      render: (value: string) => (value === "unknown" ? "Unknown" : value),
    },
    {
      title: "Crew",
      dataIndex: "crew",
      key: "crew",
    },
    {
      title: "Starship Class",
      dataIndex: "starship_class",
      key: "starship_class",
    },
  ];

  const handleRowClick = (record: Planet | Person | Starship) => {
    setSelectedItem(record);
    setDrawerVisible(true);
  };

  const renderDrawerContent = () => {
    if (!selectedItem) return null;

    const entries = Object.entries(selectedItem).filter(
      ([key]) => key !== "url" && key !== "created" && key !== "edited"
    );

    return (
      <Space direction="vertical" style={{ width: "100%" }} size="large">
        {entries.map(([key, value]) => {
          const formattedKey = key
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          let displayValue: string | React.ReactNode = value;

          if (Array.isArray(value)) {
            displayValue = `${value.length} item(s)`;
          } else if (typeof value === "string" && value.includes("http")) {
            displayValue = "Link";
          } else {
            displayValue = String(value || "Unknown");
          }

          return (
            <div key={key}>
              <Title level={5} style={{ margin: 0, marginBottom: 4 }}>
                {formattedKey}
              </Title>
              <div>{displayValue}</div>
            </div>
          );
        })}
      </Space>
    );
  };

  const tabItems = [
    {
      key: "planets",
      label: "Planets",
      children: (
        <div>
          <Space
            direction="vertical"
            style={{ width: "100%", marginBottom: 16 }}
          >
            <Search
              placeholder="Search planets..."
              allowClear
              enterButton
              size="large"
              onChange={(e) => setSearchText(e.target.value)}
              onSearch={setSearchText}
            />
          </Space>
          {planetsError ? (
            <Alert
              message="Error"
              description="Failed to load planets. Please try again later."
              type="error"
            />
          ) : (
            <Table
              columns={planetColumns}
              dataSource={filteredPlanets}
              rowKey="url"
              loading={planetsLoading}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
                style: { cursor: "pointer" },
              })}
              pagination={false}
            />
          )}
        </div>
      ),
    },
    {
      key: "people",
      label: "People",
      children: (
        <div>
          <Space
            direction="vertical"
            style={{ width: "100%", marginBottom: 16 }}
          >
            <Search
              placeholder="Search people..."
              allowClear
              enterButton
              size="large"
              onChange={(e) => setSearchText(e.target.value)}
              onSearch={setSearchText}
            />
          </Space>
          {peopleError ? (
            <Alert
              message="Error"
              description="Failed to load people. Please try again later."
              type="error"
            />
          ) : (
            <Table
              columns={peopleColumns}
              dataSource={filteredPeople}
              rowKey="url"
              loading={peopleLoading}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
                style: { cursor: "pointer" },
              })}
              pagination={false}
            />
          )}
        </div>
      ),
    },
    {
      key: "starships",
      label: "Starships",
      children: (
        <div>
          <Space
            direction="vertical"
            style={{ width: "100%", marginBottom: 16 }}
          >
            <Search
              placeholder="Search starships..."
              allowClear
              enterButton
              size="large"
              onChange={(e) => setSearchText(e.target.value)}
              onSearch={setSearchText}
            />
          </Space>
          {starshipsError ? (
            <Alert
              message="Error"
              description="Failed to load starships. Please try again later."
              type="error"
            />
          ) : (
            <Table
              columns={starshipsColumns}
              dataSource={filteredStarships}
              rowKey="url"
              loading={starshipsLoading}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
                style: { cursor: "pointer" },
              })}
              pagination={false}
            />
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>payabl. - Star Wars API Integration</title>
        <meta
          name="description"
          content="Star Wars API integration with Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={inter.className}
        style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}
      >
        <Title level={1} style={{ marginBottom: 24, textAlign: "center" }}>
          Star Wars API Integration
        </Title>
        <Tabs
          activeKey={activeTab}
          onChange={(key) => {
            setActiveTab(key as TabKey);
            setSearchText("");
          }}
          items={tabItems}
          size="large"
        />
        <Drawer
          title={selectedItem ? (selectedItem as any).name : "Details"}
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={600}
        >
          {renderDrawerContent()}
        </Drawer>
      </main>
    </>
  );
}
