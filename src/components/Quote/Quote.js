import { quotes } from './quotes'

function Quote() {
  const { text, author } = quotes[0]
  return (
    <>
      <blockquote>{text}</blockquote>
      <cite> -- {author}</cite>
    </>
  )
}

export default Quote