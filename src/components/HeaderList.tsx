import styles from './HeaderList.module.css'

interface HeaderListProps {
  createdTasksCounter: number
  completedTasksCounter: number
}

export function HeaderList({ createdTasksCounter, completedTasksCounter }: HeaderListProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{createdTasksCounter}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>
          {createdTasksCounter === 0 ? createdTasksCounter : `${completedTasksCounter} de ${createdTasksCounter}`
          }
        </span>
      </aside>
    </header>
  )
}