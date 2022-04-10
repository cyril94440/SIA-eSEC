import { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState } from "@@store";

const Dashboard: NextPage = () => {
  const userName = useSelector((state: RootState) => state.profile.userName);
  return <div>{`Welcome back, ${userName}`}</div>;
};

export default Dashboard;
