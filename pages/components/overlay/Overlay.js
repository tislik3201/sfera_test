import React from 'react'
import styles from '../../../styles/Home.module.scss'

const Overlay = ({onSignInClick, onSignUpClick}) => {
  return (
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
  )
}

export default Overlay