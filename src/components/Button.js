const Button = ({text,color,onToggleAddClose}) => {
    return (
       <button className = 'btn' style = {{backgroundColor: color}} onClick = {onToggleAddClose}>
          {text}
       </button>
    )
}

export default Button
