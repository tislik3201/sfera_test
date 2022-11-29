import react from 'react'
import styles from '../styles/Home.module.scss'
import { Switch } from './components/switchTheme/Switch'
import { useTranslation } from 'react-i18next';
import { useSession } from "next-auth/react"
import SelectLang from './components/swithLang/SelectLang';
import SignUp from './components/signupForm/SignUp';
import SignIn from './components/signinForm/SignIn';
import Overlay from './components/overlay/Overlay';
import Link from 'next/link';

export default function Home() {
  const [activeClass, setActiveClass] = react.useState(false)
  const [hydrated, setHydrated] = react.useState(false);

    react.useEffect(() => {
        setHydrated(true);
    }, []);


  const onSignUpClick = () => {
    setActiveClass(true)
  }

  const onSignInClick = () => {
    setActiveClass(false)
  }

  const { t } = useTranslation();

  if (!hydrated) {
	return null;
}

  return (
    <div>
		<SelectLang />
		<Switch />
      <h2>{t("title")}</h2>
<div className={`${styles.container} ${activeClass ? styles.right_panel_active: ''}`} id="container">
	<SignUp />
	<SignIn />
	<div className={styles.overlay_container}>
		<Overlay onSignUpClick={onSignUpClick} onSignInClick = {onSignInClick}/>
	</div>
</div>
    </div>
  )
}
