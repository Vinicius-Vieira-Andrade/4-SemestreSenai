import { LoadSpinner } from "../LoadSpinner";

export const Button = ({ styles, children, load }) => {
    // children --> tudo o que for passado dentro do Button
    return (
        <button
            disabled={load}
            type="submit"
            className={`flex justify-center py-2 px-4 rounded text-complementary-white bg-[#004582] ${styles}`}>
            {load === true ? <LoadSpinner /> : children}
        </button>
    );
}

export const ButtonTransparent = ({ children, styles, onClick }) => {
    return <button onClick={onClick} type="button" className={`flex justify-center items-center border rounded py-2 px-4 ${styles}`}>{children}</button>;
}

export const ButtonLink = ({ children, onClick }) => {
    return <button onClick={onClick} type="button" className="p-1 underline text-[#372097]">{children}</button>;
}