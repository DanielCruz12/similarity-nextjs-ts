import { FC } from 'react'
import { cva } from 'class-variance-authority'

interface IParagraphProps {
	title: string
}

const Pvariants = cva('max-w-prose', {
	variants: { sizes: { default: 'text-base', sm: 'text-sm' } },
})
console.log(Pvariants)
const Paragraph: FC<IParagraphProps> = ({ title }) => {
	return <div>{title}</div>
}

export default Paragraph
