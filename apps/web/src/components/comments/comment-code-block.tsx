import { CodeBlock } from '@tszhong0411/ui'

type CommentCodeBlockProps = {
  children: {
    props: {
      children: string
      className?: string
      title?: string
    }
  }
}

const CommentCodeBlock = (props: CommentCodeBlockProps) => {
  const {
    children: {
      props: { children, className, title }
    }
  } = props

  return (
    <CodeBlock data-lang={className?.replace('lang-', '')} title={title}>
      {children}
    </CodeBlock>
  )
}

export default CommentCodeBlock
