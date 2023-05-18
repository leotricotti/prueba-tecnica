import { useState, useEffect } from "react";

// Custom hook to merge two data sets
const useMergedData = (data1, data2) => {
  // State to hold the merged data
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    // Merge the data sets when either of them changes
    const mergedDataArray = data1.map((user) => {
      const { id } = user;
      // Find the corresponding data from data2 using the user's ID
      const data = data2.find((item) => item.id === id);

      if (data) {
        // If there is a matching data in data2, merge it with the user data
        return { ...user, color: data.color };
      }

      // If there is no matching data, keep the user data as it is
      return user;
    });

    // Update the state with the merged data
    setMergedData(mergedDataArray);
  }, [data1, data2]);

  // Return the merged data
  return mergedData;
};

export default useMergedData;
