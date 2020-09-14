import { useState, useEffect } from "react";

import addMonthStrings from "./addMonthStrings";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [baseTemperature, setBaseTemperature] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    const dataset = await json.monthlyVariance;
    const updatedDataset = await addMonthStrings(dataset);
    const baseTemperature = await json.baseTemperature;
    setData(updatedDataset);
    setBaseTemperature(baseTemperature);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, baseTemperature, loading];
}
export { useFetch };
