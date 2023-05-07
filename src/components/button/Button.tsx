interface ButtonProps {
    children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return (
        <button className="bg-defaultBlue hover:text-hoverButton rounded-lg font-bold text-lg p-7 border-none cursor-pointer text-white">{children}</button>
    )
}

export default Button;