interface ButtonProps {
    nameButton: string;
}

const Button = ({ nameButton }: ButtonProps) => {
    return (
        <button className="bg-defaultBlue hover:text-hoverButton rounded-lg font-bold text-lg p-7 border-none cursor-pointer text-white">{nameButton}</button>
    )
}

export default Button;