import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Cabinet.module.css";

import Rack from "../components/Rack";

const Cabinet = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <p> HI THERE </p>
        <Rack />
      </div>
    </>
  );
};

export default Cabinet;
