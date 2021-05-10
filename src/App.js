import styles from './App.module.css'
import Converter from './components/Converter/Converter'
import Quote from './components/Quote/Quote'

function App() {
  return (
    <main className={styles.main}>
      <Converter />
      <Quote />
    </main>
  )
}

export default App
