import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Rack.module.css";
// import { useEffect, useState } from "react";

const Rack = () => {
  const rackUnits = Array.from({ length: 45 }, (_, i) => (
    <p className={styles.rackUnitContainer}> u{i + 1} </p>
  ));

  // got to do a fetch here to get the data
  //
  // const [data, setData] = useState<string[]>([]);
  //
  // function fetchData() {
  //   console.log(data);
  //   setData(["hi", "there"]);
  // }
  //
  // useEffect(() => {
  //   fetchData();
  // }); // Empty dependency array means this effect will only run once, after the first render

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.rackContainer}>
          <div className={styles.pageTitle}>
            <p>Rack 1</p>
          </div>
          <div>{rackUnits}</div>
        </div>
      </div>
    </>
  );
};

export default Rack;
