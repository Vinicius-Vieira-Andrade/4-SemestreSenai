export const Input = ({ styles, id, children, value, onChange, places, type, disabled}) => {
    return (
        <div className={styles}>
            <label className="block text-lg mb-2" htmlFor={id}>
                {children}
            </label>

            <input
                className="w-full py-2 px-3 border border-complementary-black rounded"
                disabled={disabled}
                id={id}
                type={type}
                autoComplete="off"
                required
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export const Select = ({ styles, children, id, value, onChange, places }) => {
    return (
        <div className={styles}>
            <label className="block text-lg mb-2" htmlFor={id}>
                {children}
            </label>

            <input
                list="list-places"
                className="w-full py-2 px-3 border border-complementary-black rounded"

                id={id}
                type="text"
                autoComplete="off"

                required
                value={value}
                onChange={onChange}
            />

            <datalist id="list-places">
                {
                    places.map((item, index) => {
                        return <option key={index} value={item.nome} />
                    })
                }
            </datalist>
        </div>
    );
}