import ReusableBanner from "./../components/ReusableBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Dashboard() {
  return (
    <div className="bg-purple text-white">
      <div className="">
        <ReusableBanner>
          <div className="text-center py-14">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="w-1/2 mx-auto mt-4">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </ReusableBanner>
      </div>
      <div className="">
        <Tabs>
          <TabList className="flex justify-center">
            <Tab className="bg-transparent w-[15%] text-center border rounded-3xl py-3 px-9">Title 1</Tab>
            <Tab className="bg-transparent  w-[15%] text-center border rounded-3xl py-3 px-9">Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard;