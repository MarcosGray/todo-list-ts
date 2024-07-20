import styles from './Input.module.css'
export function Input() {
  return (
    <input className={styles.container} placeholder='Adicione aqui uma nova tarefa' />
  )
}