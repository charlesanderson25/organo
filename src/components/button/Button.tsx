interface ButtonProps {
    nameButton: string;
}

const Button = ({ nameButton }: ButtonProps) => {
    return (
        <button>{nameButton}</button>
    )
}

export default Button;