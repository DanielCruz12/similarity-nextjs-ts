import { FC } from 'react'

interface IParagraphProps {
	title: string
}

const Paragraph: FC<IParagraphProps> = ({ title }) => {
	return <div>{title}</div>
}

export default Paragraph
