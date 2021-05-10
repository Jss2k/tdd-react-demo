import { quotes } from './quotes'
import { selectRandomQuote } from './selectRandomQuote'
import styles from './Quote.module.css'

const defaultQuote = selectRandomQuote(quotes)

function Quote({ quote = defaultQuote }) {
  const { text, author } = quote

  return (
    <footer className={styles.quote}>
      <blockquote>{text}</blockquote>
      <cite className={styles.author}> -- {author}</cite>
    </footer>
  )
}

export default Quote