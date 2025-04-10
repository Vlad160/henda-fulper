import styles from "./App.module.scss"
import {FC} from "react";
import {Form} from "./components/Form/Form.tsx";
import {Links} from "./components/Links/Links.tsx";

export const App: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <Form/>
        <Links/>
      </div>
    </div>
  )
};

