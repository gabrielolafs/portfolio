import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Cabinet.module.css";
// import {useState} from "react";

const Rack = () => {
  // // gotta do a fetch here to get the data
  //
  // const [data, setData] = useState([]);
  //
  // function fetchData() {
  //     setData(['hi', 'there']);
  // }

  return (
    <>
      <div className={styles.pageContainer}>
        <p> this is a rack that will have content</p>
      </div>
    </>
  );
};

export default Rack;
