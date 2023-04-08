import Home from '@/app/page'
import React, { ReactNode } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Home />
			{children}
		</div>
	)
}

export default Providers
