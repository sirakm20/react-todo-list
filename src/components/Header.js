import Button from './Button'
const Header = ({title,addclosestatus,onToggleAddClose}) => {
    return (
        <header className = 'header'>
            <h3> {title}</h3>
            <Button color = {addclosestatus ? 'red' : 'green'} text = {addclosestatus ? 'close' : 'add'} onToggleAddClose = {onToggleAddClose} />
        </header>
    )
}

export default Header
