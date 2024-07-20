import styles from './DetailListEmpty.module.css'
import LogoList from '../assets/Clipboard.svg'

export function DetailListEmpty(){
  return (
    <div className={styles.container}>
      <img src={LogoList} alt='icone de prancheta' />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}