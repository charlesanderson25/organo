interface ButtonProps {
    nameButton: string;
}

const Button = ({ nameButton }: ButtonProps) => {
    return (
        <button className="bg-defaultBlue">{nameButton}</button>
    )
}

export default Button;