
import { useState } from 'react'
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
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValues, setInputValues] = useState('')

  const completedTasksCounter = tasks.reduce((oldValue, currentTask) => {
    if (currentTask.isChecked) {
      return oldValue + 1
    }

    return oldValue
  }, 0)

  function handleAddTask(){
    if(!inputValues) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValues,
      isChecked: false
    }

    setTasks((state) => [...state, newTask])
    setInputValues('')
  }

  function handleRemoveTask(id: number){
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if(!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number, value: boolean}) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }
      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />
      <section className={styles.content} >
        <div className={styles.newTaskContainer} >
          <Input onChange={(e) => setInputValues(e.target.value)} value={inputValues} />
          <Button onClick={handleAddTask} >
            Criar
            <PlusCircle size={16} color='#f2f2f2' weight='bold' />
          </Button>
        </div>
        <div className={styles.tasksList} >
          <HeaderList 
            createdTasksCounter={tasks.length} 
            completedTasksCounter={completedTasksCounter} 
          />

          {tasks.length > 0 ? 
            (<div>
              {tasks.map((task) => (
                <DetailList
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                /> 
              ))}
            </div>) : 
            <DetailListEmpty 
          />}          
        </div>
      </section>
    </main>
  )
}

export default App
