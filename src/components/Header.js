import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({title,addclosestatus,onToggleAddClose}) => {
    const location = useLocation();
    return (
        <header className = 'header'>
            <h3> {title}</h3>
            {location.pathname === '/' && (<Button color = {addclosestatus ? 'red' : 'green'} text = {addclosestatus ? 'close' : 'add'} onToggleAddClose = {onToggleAddClose} />)}
        </header>
    )
}

export default Header
