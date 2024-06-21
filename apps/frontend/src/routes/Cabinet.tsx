import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Cabinet.module.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Rack from "../components/Rack.tsx";
// import { Rack } from "common/src/networking.ts";

const Cabinet = () => {
  const [racks, setRacks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/cabinet/rack-getter", {
        params: { cabinetID: "ipswich_cab" },
      })
      .then((response) => {
        const formattedData = response.data.map(
          (rack: { rackID: string }) => rack.rackID,
        );
        setRacks(formattedData);
        console.log(formattedData);
      })
      .catch((error) => {
        console.log("doo doo");
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <>
      <div className={styles.pageContainer}>
        {racks.map((rackID, index) => (
          <Rack key={index} num={index + 1} rackID={rackID} />
        ))}
      </div>
    </>
  );
};

export default Cabinet;
