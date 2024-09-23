import styles from "./footer.module.css"
export default function Footer({completedtodos , totaltodos}){
    return <div className={styles.footer}>
                      <span className={styles.item}>Total To-Do's : {totaltodos}</span>
              <span className={styles.item}>Completed To-Do's : {completedtodos}</span>

    </div>
}