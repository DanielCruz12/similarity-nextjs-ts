'use-client'

import { nodejs, python } from '@/helpers/documentation-code'
import Code from './Code'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'

const DocumentationTabs = () => {
	return (
		<>
			<Tabs defaultValue="nodejs" className="max-w-2xl w-full max-h-96">
				<TabsList>
					<TabsTrigger value="python">python</TabsTrigger>
					<TabsTrigger value="nodejs">nodejs</TabsTrigger>
				</TabsList>
				<TabsContent value="nodejs">
					<Code animated code={nodejs} show language="javascript"></Code>
				</TabsContent>
				<TabsContent value="python">
					<Code animated code={python} show language="python"></Code>
				</TabsContent>
			</Tabs>
		</>
	)
}

export default DocumentationTabs
