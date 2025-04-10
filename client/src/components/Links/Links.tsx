import {observer} from "mobx-react-lite";
import styles from "./styles.module.scss";
import {useStore} from "../../store";

export const Links = observer(() => {
  const store = useStore();

  const links = store.links;

  return <ul role="list" className={styles.links}>
    {links.map((link) => (
      <li key={link.id} className={styles.link}>{link.src}</li>
    ))}
  </ul>
})