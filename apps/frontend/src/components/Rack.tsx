import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Cabinet.module.css";
import { useEffect, useState } from "react";

const Rack = () => {
  // gotta do a fetch here to get the data

  const [data, setData] = useState<string[]>([]);

  function fetchData() {
    console.log(data);
    setData(["hi", "there"]);
  }

  useEffect(() => {
    fetchData();
  }); // Empty dependency array means this effect will only run once, after the first render

  return (
    <>
      <div className={styles.pageContainer}>
        <p> this is a rack that will have content</p>
      </div>
    </>
  );
};

export default Rack;
