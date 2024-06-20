import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Cabinet.module.css";

import Rack from "../components/Rack";

const Cabinet = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <Rack />
      </div>
    </>
  );
};

export default Cabinet;
