import { Trash, Check } from '@phosphor-icons/react'


import styles from './DetailList.module.css'

export function DetailList() {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <label htmlFor="checkbox">
            <input readOnly type="checkbox" />
            <span> <Check size={12} /> </span>
            <p>
              Qualquer texto aqui.
            </p>
          </label>
        </div>
        <button>
          <Trash size={16} color='#808080'  />
        </button>
      </div>

      <div className={styles.container}>
        <div>
          <label htmlFor="checkbox">
            <input readOnly type="checkbox" />
            <span> <Check size={12} /> </span>
            <p>
              Segundo texto.
            </p>
          </label>
        </div>
        <button>
          <Trash size={16} color='#808080'  />
        </button>
      </div>
    </div>
  )
}