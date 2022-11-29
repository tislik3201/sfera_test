import React from 'react'
import { useTranslation } from 'react-i18next';

const SelectLang = () => {
    const { i18n } = useTranslation();
  return (
    <div>
        <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
          <option>Choose language</option>
          <option value="pl">Polish</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
    </div>
  )
}

export default SelectLang