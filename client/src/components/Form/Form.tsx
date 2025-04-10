import {FC, SyntheticEvent, useCallback, useRef, useState} from "react";
import styles from "./styles.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store";

export const Form: FC = observer(() => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const store = useStore();

  const handleSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    const url = (inputRef.current?.value || "").trim();
    setError("");
    if (!url || !URL.canParse(url)) {
      setError("URL is required");
      return;
    }
    const parsed = URL.parse(url);

    if (!parsed) {
      setError("URL is required");
      return;
    }

    if (parsed.hostname !== "www.funda.nl") {
      setError("Host must be funda.nl");
      return;
    }

    store.addLink(url);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [store])

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <input ref={inputRef} required={true} className={styles.input} placeholder="Add filter url"/>
        <div className={styles.error}>{error}</div>
      </div>
      <button onClick={handleSubmit} type="submit" className={styles.btn}>Add link</button>
    </form>
  )
})