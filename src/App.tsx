import styles from "./App.module.scss"
import {useCallback} from "react";

function App() {

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, [])

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input className={styles.input} placeholder="Add filter url"/>
        <button onClick={handleSubmit} type="button" className={styles.btn}>Add link</button>
      </form>
    </div>
  )
}

export default App
