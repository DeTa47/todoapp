import styles from './footer.module.css';

export default function Footer({completed, todos}){
    return <div className={styles.footer}>
        <span className={styles.item}>Completed: {completed} </span>
        <span className={styles.item}>Total todos: {todos.length}</span>
    </div>
}