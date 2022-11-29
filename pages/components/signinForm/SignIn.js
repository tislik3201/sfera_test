import React from 'react'
import styles from '../../../styles/Home.module.scss'
import { signIn } from "next-auth/react"
import {useFormik} from 'formik'
import login_validate from '../../../lib/validate'
import { useRouter } from 'next/router'
import Link from 'next/link'

const SignIn = () => {
	const router = useRouter()
	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		validate: login_validate,
		onSubmit
	})

	async function onSubmit(values){
        const status = await signIn('credentials', {
            redirect: false,
            username: values.username,
            password: values.password,
            callbackUrl: "/"
        })
		console.log(status)
        if(status.ok) router.push(status.url)
        
    }

    async function  handleGoogleSignin () {
        signIn('google', {callbackUrl: "http://localhost:3000/profile"})
      }
  return (
    <div className={`${styles.form_container} ${styles.sign_in_container}`}>
		<form onSubmit={formik.handleSubmit}>
			<h1>Sign in</h1>
			<div className={styles.social_container}>
      			<a onClick={handleGoogleSignin} href="#" className={styles.social}><i className={`${styles.fab} ${styles.fa_facebook_f}`}></i></a>
			</div>
			<span>or use your account</span>
			{formik.errors && formik.touched.username ? <span className={styles.validError}>{formik.errors.username}</span> : <></>}
			<input {...formik.getFieldProps('username')} name='username' type="text" placeholder="username" />
			{formik.errors && formik.touched.password ? <span className={styles.validError}>{formik.errors.password}</span> : <></>}
			<input {...formik.getFieldProps('password')} name='password' type="password" placeholder="Password" />
			<button  type='submit'>Sign In</button>
		</form>
	</div>
  )
}

export default SignIn