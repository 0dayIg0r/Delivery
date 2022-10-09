import style from './styles.module.css'

type Props = {
    color: string,
    label: string,
    onClick: () => void,
    fill?: boolean
}

export const Button = ({
    color,
    label,
    onClick,
    fill
}:Props) =>{
    return(
        <div 
        className={style.container}
        onClick={() => onclick}
        style={{
            color: fill ? '#FFF' : color,
            borderColor: color,
            backgroundColor: fill ? color : 'transparent'
        }}
        
        >
            {label}
        </div>
    )
}