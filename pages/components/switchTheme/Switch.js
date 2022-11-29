import React from "react"
import styles from '../../../styles/Switch.module.css'
export const Switch = () => {
    const [theme, setTheme] = React.useState('light')
    const handleChange = (e) => setTheme(e.target.checked ? 'dark' : 'light')
    React.useEffect(() => {

        document.body.setAttribute('data-theme', theme);

    }, [theme]);
    return (
        <div className={styles.container_switch}>
            <span>Change Theme </span>
            <label className={styles.switch}>
                <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
                <span className={styles.slider}></span>
            </label>
        </div>
    )
}