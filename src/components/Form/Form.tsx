import {FC, useCallback} from "react";
import styles from "./styles.module.scss";

export const Form: FC = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, [])

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} placeholder="Add filter url"/>
      <button onClick={handleSubmit} type="button" className={styles.btn}>Add link</button>
    </form>
  )
}