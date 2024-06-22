import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import BarCharts from "../component/BarCharts";
import axios from  "axios";
const Home = () => {
  const [dateRangeState, setDateRangeState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    display: false,
  });
  function handleSelect(ranges) {
    setDateRangeState({ ...ranges.range1, display: !dateRangeState.display });
  }
  return (
    <div>
      <DateRangePicker ranges={[dateRangeState]}  onChange={handleSelect}/>
      <div
        style={{
          width: "80vw",
          height: "80vw",
        }}
      >
        <BarCharts />
      </div>
    </div>
  );
};

export default Home;
