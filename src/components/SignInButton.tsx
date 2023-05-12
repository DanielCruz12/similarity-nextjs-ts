import { toast } from './ui/toast'

const SignInButton = () => {
	/* 	const [isLoading, setIsLoading] = useState<boolean>(false)
	 */
	const signInWithGoogle = async () => {
		try {
			toast({
				title: 'Error signing in',
				message: 'Please try again later.',
				type: 'error',
			})
			/* await signIn('google') */
		} catch (error) {
			console.log(error)
		}
	}

	return <div onClick={signInWithGoogle}>sign In</div>
}

export default SignInButton
