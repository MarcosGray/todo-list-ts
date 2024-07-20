import Logo from '../assets/Logo.svg'
import styles from './Header.module.css'

export function Header(){
  return (
    <header className={styles.container}>
      <img src={Logo} alt='Logo da aplicação' />
    </header>
  )
}