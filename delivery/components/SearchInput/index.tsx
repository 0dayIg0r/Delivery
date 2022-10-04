import { useState } from 'react'
import styles from './styles.module.css'

export const SearchInput = ({ color }) => {
    const [focused, setFocused] = useState(false)


    return (
        <div
            className={styles.container}
            style={{ borderColor: focused ? '#FF0000' : '#FFF' }}
        >
            <div className={styles.button}></div>
            <input type='text'
                placeholder='O que você procura?'
                className={styles.input}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </div>
    )
}