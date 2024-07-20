
import { PlusCircle } from '@phosphor-icons/react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import Logo from './assets/Clipboard.svg'
import styles from './App.module.css'
import { Button } from './components/Button'

function App() {

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
          <div>
            <header className={styles.containerHearderList}>
              <aside>
                <p>Tarefas criadas</p>
                <span>0</span>
              </aside>
              <aside>
                <p>Concluídas</p>
                <span>0</span>
              </aside>
            </header>
          </div>
          <div className={styles.containerEmpty}>
            <img src={Logo} alt='icone de prancheta' />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
