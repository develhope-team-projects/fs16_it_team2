import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const TimeZoneChanger = () => {
  const [timezones, setTimezones] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Fetch the list of available timezones using moment-timezone
    const availableTimezones = moment.tz.names();
    setTimezones(availableTimezones);

    // Update the current time when the component mounts
    updateCurrentTime(selectedTimezone);

    // Set up an interval to update the current time every second
    const intervalId = setInterval(() => {
      updateCurrentTime(selectedTimezone);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [selectedTimezone]);

  const updateCurrentTime = (timezone) => {
    const formattedTime = moment().tz(timezone).format("hh:mm:ss A");
    setCurrentTime(formattedTime);
  };

  const handleTimezoneChange = (event) => {
    const newTimezone = event.target.value;
    setSelectedTimezone(newTimezone);
    updateCurrentTime(newTimezone);
  };


  
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-6">Time Zone Settings</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Time Zone:
        </label>
        <select
          value={selectedTimezone}
          onChange={handleTimezoneChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          {timezones.map((timezone) => (
            <option key={timezone} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>
      </div>
      <p className="text-gray-600">Current Time: {currentTime}</p>
    </div>
  );
};

export default TimeZoneChanger;
