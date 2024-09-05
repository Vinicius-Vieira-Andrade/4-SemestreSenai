export const Input = (props) => {
    return (
        <div className={props.styles}>
            <label className="block text-lg font-base mb-2" htmlFor={props.id}>{props.children}</label>

            <input
            className="w-full py-2 px-3 border rounded border-complementary-gray"
                type="text" 
                id={props.id}
                required
                // value={props.children}
                onChange={props.onChange}
                autoComplete="off"
            />
        </div>
    )
}