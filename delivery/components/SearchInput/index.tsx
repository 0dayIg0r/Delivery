import React, { useState } from 'react'
import styles from './styles.module.css'

type Props ={
    mainColor: string
    onSearch: (searchValue: string) => void
} 
export const SearchInput = ({ mainColor, onSearch }: Props) => {
    const [focused, setFocused] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.code === 'Enter'){
            onSearch(searchValue)
        }
    }
    return (
        <div
            className={styles.container}
            style={{ borderColor: focused ? '#FF0000' : '#FFF' }}
        >
            <div
             className={styles.button}
             onClick={() => onSearch(searchValue)}
             >

             </div>
            <input type='text'
                placeholder='O que você procura?'
                className={styles.input}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyUp={handleKeyUp}
                value={searchValue}
                onChange={(e) =>setSearchValue(e.target.value)}
            />

        </div>
    )
}