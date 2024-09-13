export const Title = (props) => {
    // Classes fixas e dinâmicas
    return <h1 className={`text-2xl font-semibold text-center ${props.styles}`}>{props.children}</h1>;
}

export const Paragraph = (props) => {
    // Classes fixas e dinâmicas
    return <p className={`text-xl text-center w-[50%] ${props.styles}`}>{props.children}</p>;
}

export const TextError = ({ children }) => {
    return <p className="text-lg transition-all text-primary-red">{children}</p>
}