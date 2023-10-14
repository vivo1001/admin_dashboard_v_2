import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    console.log(response);
    if (response.status === 200) {
      const apiData = response.data;
      console.log("hi", apiData);

      const updatedBoardData = {
        columns: apiData.columns,
      };

      setBoardData(updatedBoardData);
    } else {
      throw new Error("Failed to fetch data from API");
    }
  } catch (error) {
    console.error("Error fetching data from API:", error);
    // Handle errors, e.g., show an error message to the user
  }
};

fetchDataFromAPI();

export default fetchDataFromAPI;
