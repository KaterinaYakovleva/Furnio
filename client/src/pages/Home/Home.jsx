import styles from "./Home.module.css";
import Advertisment from "../../widgets/Advertisment/Advertisment";
import Range from "../../widgets/Range/Range";
import Products from "../../widgets/Products/Products";
import Inspiration from "../../widgets/Inspiration/Inspiration";
import SetupInst from "../../widgets/SetupInst/SetupInst";

export default function Home() {
  return (
    <div className={styles.container}>
      <Advertisment />
      <Range />
      <Products />
      <Inspiration />
      <SetupInst />
    </div>
  );
}
