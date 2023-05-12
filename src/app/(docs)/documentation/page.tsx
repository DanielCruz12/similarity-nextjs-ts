'use-client'

import DocumentationTabs from '@/components/DocumentationTabs'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'documentation',
	description: 'documentation api',
}

const Page = () => {
	return (
		<div className="container max-w-7xl mx-auto mt-12">
			<div className="flex flex-col items-center gap-6">
				<LargeHeading size="lg">Making a request</LargeHeading>
				<Paragraph>api/v1</Paragraph>
				<DocumentationTabs />
			</div>
		</div>
	)
}

export default Page
