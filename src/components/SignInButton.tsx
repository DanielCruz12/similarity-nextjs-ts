'use client'
/* 
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { toast } from './ui/toast' */
import { Button } from './ui/Button'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

const SignInButton = () => {
	/* 	const [isLoading, setIsLoading] = useState<boolean>(false)

	const signInWithGoogle = async () => {
		try {
			setIsLoading(true)
			await signIn('google')
		} catch (error) {
			toast({
				title: 'Error signing in',
				message: 'Please try again later.',
				type: 'error',
			})
		}
	} */

	return <Button>Sign in</Button>
}

export default SignInButton
