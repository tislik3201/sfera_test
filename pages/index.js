import Head from 'next/head'
import Image from 'next/image'
import react from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [activeClass, setActiveClass] = react.useState(false)
  const onSignUpClick = () => {
    setActiveClass(true)
  }
  const onSignInClick = () => {
    setActiveClass(false)
  }

  return (
    <div>
      <h2>Sign in/up Form</h2>
<div className={`${styles.container} ${activeClass ? styles.right_panel_active: ''}`} id="container">
	<div className={`${styles.form_container} ${styles.sign_up_container}`}>
		<form action="#">
			<h1>Create Account</h1>
			<div className={styles.social_container}>
				<a href="#" className={styles.social}><i className={`${styles.fab} ${styles.fa_facebook_f}`}></i></a>
				<a href="#" className={styles.social}><i className={`${styles.fab} ${styles.fa_google_plus_g}`}></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div className={`${styles.form_container} ${styles.sign_in_container}`}>
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
      <a href="#" className={styles.social}><i className={`${styles.fab} ${styles.fa_facebook_f}`}></i></a>
				<a href="#" className={styles.social}><i className={`${styles.fab} ${styles.fa_google_plus_g}`}></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div className={styles.overlay_container}>
		<div className={styles.overlay}>
			<div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button onClick={() => onSignInClick()} className={styles.ghost} id="signIn">Sign In</button>
			</div>
			<div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button onClick={()=> onSignUpClick()} className={styles.ghost} id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}
