import React from 'react'
import styles from '../../../styles/Home.module.scss'
import {useFormik} from 'formik'
import { signup_validate } from '../../../lib/validate'
import { useRouter } from 'next/router'

const SignUp = () => {
	const router = useRouter()
	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		validate: signup_validate,
		onSubmit
	})

	async function onSubmit(values){
        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup', options)
            .then(res => res.json())
			console.log(res)
            .then((data) => {
                if(data) router.push('http://localhost:3000/profile')
				console.log(data)
            })
    }
	
  return (
    <div className={`${styles.form_container} ${styles.sign_up_container}`}>
		<form onSubmit={formik.handleSubmit}>
			<h1>Create Account</h1>
			<span>or use your login for registration</span>
			{formik.errors && formik.touched.username ? <span className={styles.validError}>{formik.errors.username}</span> : <></>}
			<input {...formik.getFieldProps("username")} name = 'username' type="username" placeholder="username" />
			{formik.errors && formik.touched.password ? <span className={styles.validError}>{formik.errors.password}</span> : <></>}
			<input {...formik.getFieldProps("password")}   name='password' type="password" placeholder="Password" />
			<button  type = 'submit'>Sign Up</button>
		</form>
	</div>
  )
}

export default SignUp