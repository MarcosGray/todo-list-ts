
// import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { HeaderList } from './components/HeaderList'
import { DetailListEmpty } from './components/DetailListEmpty'
import { DetailList } from './components/DetailList'

import styles from './App.module.css'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  // const [tasks, setTask] = useState<ITask[]>()
  // const [imputValues, setInputValues] = useState('')
  const t = 1

  return (
    <main>
      <Header />
      <section className={styles.content} >
        <div className={styles.newTaskContainer} >
          <Input />
          <Button>
            Criar
            <PlusCircle size={16} color='#f2f2f2' weight='bold' />
          </Button>
        </div>
        <div className={styles.tasksList} >
          <HeaderList createdTasksCounter={0} completedTasksCounter={0} />

          {t > 0 ? <DetailList /> : <DetailListEmpty />}          
        </div>
      </section>
    </main>
  )
}

export default App
