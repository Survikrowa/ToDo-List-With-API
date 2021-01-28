import { FormContainer } from "../../components/forms/FormContainer";
import styles from "./main.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>
        <span className={styles.headerText}>JUNIOR</span>
        <span className={styles.headerText}>START</span>
      </h1>
      <FormContainer />
    </main>
  );
};
