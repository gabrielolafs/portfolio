import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Rack.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Empty from "./devices/Empty";

// import { useEffect, useState } from "react";
interface RackProps {
  num: number;
  rackID: string;
}

const Rack: React.FC<RackProps> = ({ num, rackID }) => {
  const [deviceStyles] = useState<Array<React.CSSProperties>>([
    {
      // Empty
      backgroundColor: "grey",
      borderTop: "black 0.1vh solid",
      borderRight: "black 0.2vh solid",
      borderLeft: "black 0.2vh solid",
      borderBottom: "black 0.1vh solid",
    },
    {
      // One U Device
      backgroundColor: "lightgrey",
      borderTop: "black 0.1vh solid",
      borderRight: "black 0.2vh solid",
      borderLeft: "black 0.2vh solid",
      borderBottom: "black 0.1vh solid",
    },
    {
      // Start of Device with > 1 U
      color: "lightgrey",
      backgroundColor: "lightgrey",
      borderTop: "black 0.1vh solid",
      borderRight: "black 0.2vh solid",
      borderLeft: "black 0.2vh solid",
      paddingBottom: "0.1vh",
    },
    {
      // Middle of Device with > 2 U
      backgroundColor: "lightgrey",
      color: "lightgrey",
      paddingTop: "0.1vh",
      borderRight: "black 0.2vh solid",
      borderLeft: "black 0.2vh solid",
      paddingBottom: "0.1vh",
    },
    {
      // End of Device with > 1 U
      backgroundColor: "lightgrey",
      paddingTop: "0.1vh",
      borderRight: "black 0.2vh solid",
      borderLeft: "black 0.2vh solid",
      borderBottom: "black 0.1vh solid",
    },
    {
      // Alt Empty for start
      backgroundColor: "grey",
      borderTop: "black 0.2vh solid",
      borderRight: "black 0.2vh solid",
      borderLeft: "black 0.2vh solid",
      borderBottom: "black 0.1vh solid",
    },
    {
      // Alt One U Device for start
      backgroundColor: "lightgrey",
      borderTop: "black 0.vh solid",
      borderRight: "black 0.2vh solid",
      borderLeft: "black 0.2vh solid",
      borderBottom: "black 0.1vh solid",
    },
    {
      // Alt Start of Device with > 1 U for start
      color: "lightgrey",
      backgroundColor: "lightgrey",
      border: "black 0.2vh solid",
    },
    {},
    {},
    {
      // Alt Empty for end
      backgroundColor: "grey",
      borderTop: "black 0.1vh solid",
      borderRight: "black 0.2vh solid",
      borderLeft: "black 0.2vh solid",
      borderBottom: "black 0.2vh solid",
    },
    {
      // Alt One U Device for end
      backgroundColor: "lightgrey",
      borderTop: "black 0.1vh solid",
      borderRight: "black 0.2vh solid",
      borderLeft: "black 0.2vh solid",
      borderBottom: "black 0.2vh solid",
    },
    {},
    {},
    {
      // Alt Start of Device with > 1 U for end
      backgroundColor: "lightgrey",
      paddingTop: "0.1vh",
      borderRight: "black 0.2vh solid",
      borderLeft: "black 0.2vh solid",
      borderBottom: "black 0.2vh solid",
    },
  ]);

  const [deviceName, setDeviceName] = useState<string[]>([]);
  const [deviceStyle, setDeviceStyle] = useState<number[]>([0, 1, 2, 3, 4]);

  const rackUnits = Array.from(
    { length: 45 },
    (
      _,
      i, // length 45 will be changed to cabinet.RackUnits
    ) => (
      <div className={styles.rackUnitContainer}>
        <p className={i == 0 ? styles.rackUnitTop : styles.rackUnit}>
          {" "}
          u{45 - i}{" "}
        </p>
        <p
          style={
            i == 0
              ? deviceStyles[deviceStyle[i] + 5]
              : i == 44
                ? deviceStyles[deviceStyle[i] + 10]
                : deviceStyles[deviceStyle[i]]
          }
          className={styles.deviceName}
        >
          {" "}
          {deviceName[i]}{" "}
        </p>
      </div>
    ),
  );

  useEffect(() => {
    axios
      .get("/api/cabinet/device-getter", {
        params: { rackID: rackID },
      })
      .then((response) => {
        const devices = response.data;
        const newDeviceNames = [];
        const newDeviceStyles = [];

        for (let i = 44; i >= 0; i--) {
          const device = devices.find(
            (d: { bottomURack: number }) => d.bottomURack === i + 1,
          );

          if (device) {
            for (let j = 0; j < device.URacksUsed; j++) {
              newDeviceNames[i + j] = device.name;
              if (device.URacksUsed === 1) {
                newDeviceStyles[i + j] = 1;
              } else {
                if (j === 0) {
                  newDeviceStyles[i + j] = 4; // Start of device
                } else if (j === device.URacksUsed - 1) {
                  newDeviceStyles[i + j] = 2; // End of device
                } else {
                  newDeviceStyles[i + j] = 3; // Middle of device
                }
              }
            }
            i += device.URacksUsed - 1;
          } else {
            newDeviceNames[i] = "";
            newDeviceStyles[i] = 0;
          }
        }

        setDeviceName(newDeviceNames.reverse());
        setDeviceStyle(newDeviceStyles.reverse());
      })
      .catch((error) => {
        console.log("doo doo");
        console.error("There was an error!", error);
      });
  }, [rackID]);

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.rackContainer}>
          <Empty />
          <div className={styles.pageTitle}>
            <p>Rack {num}</p>
          </div>
          <div>{rackUnits}</div>
          <Empty />
        </div>
      </div>
    </>
  );
};

export default Rack;
