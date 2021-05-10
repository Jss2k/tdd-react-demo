import { useState } from 'react'
import styles from './Converter.module.css'

function Converter() {
  const [rub, setRub] = useState(100)
  const [usd, setUSD] = useState(42)

  return (
    <form className={styles.converter}>
      <label>
        <p>Сумма в рублях</p>
        <input
          type='number'
          name='rub'
          min='0'
          step='1'
          value={rub}
          onChange={(e) => setRub(e.target.value)}
        />
      </label>

      <label>
        <p>Сумма в долларах</p>
        <input
          type='number'
          name='usd'
          min='0'
          step='1'
          value={usd}
          onChange={(e) => setUSD(e.target.value)}
        />
      </label>
    </form>
  )
}

export default Converter