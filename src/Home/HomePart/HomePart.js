import React, { useState, useEffect } from "react";
import axios from "axios";
import StepApp from "../../assests/logo.png";
import { Select } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import config from "../../config.json";
import {
  HomeContainerTwo,
  HomeItemsTwo,
  StepAppLogo,
  HomeH1,
  HomeBtn,
  HomeSelect,
} from "./HomePartElements";

export default function Home() {
  let history = useHistory();
  const [states, setState] = useState([]);
  const [statesDropdown, setStatesDropdown] = useState([]);
  const [error, setError] = useState();

  useEffect(
    () => {
      axios
        .get(config.schoolapi)
        .then((response) => {
          setState(response.data.data);
        })
        .catch((error) => {
          setError(alert("No data available, please try later"));
        });
    },
    [],
    [error]
  );

  const fetchDropdownValue = (e) => {
    setStatesDropdown({ selectValue: e.target.value });
  };

  const proceed = () => {
    if (!statesDropdown.selectValue) {
      alert("Please select the Name");
    } else {
      localStorage.setItem("selectValue", statesDropdown.selectValue);

      history.push({
        pathname: "/login",
        selectValue: statesDropdown.selectValue,
      });

      const selectValue = localStorage.getItem("selectValue") === "true";
      setState({ selectValue });
    }
  };
  return (
    <HomeContainerTwo>
      <HomeItemsTwo>
        <StepAppLogo src={StepApp} alt="" />
        <HomeH1>Select School</HomeH1>
        <HomeSelect>
          <Select
            onChange={fetchDropdownValue}
            placeholder="School Name"
            style={{ border: 0, outline: 0 }}
            outline="none"
            focusBorderColor="none"
          >
            {states.map((state) => (
              <option value={state.value}>{state.first_name}</option>
            ))}
          </Select>
        </HomeSelect>
        <HomeBtn onClick={proceed}>Proceed</HomeBtn>
      </HomeItemsTwo>
    </HomeContainerTwo>
  );
}
