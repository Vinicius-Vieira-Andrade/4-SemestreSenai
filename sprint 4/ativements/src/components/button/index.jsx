import { LoadindSpinner } from "../loadSpinner"

    export const Button = (props) => {
        return <button disabled={props.load} type="submit" className={`py-2 px-4 rounded flex justify-center bg-[#004582] text-complementary-white ${props.styles}`}>{props.load ? <LoadindSpinner/> : props.children}</button>
    }


    export const ButtonLink = (props) => {
        return <button className="p-1 underline text-[#372097] font-medium">{props.children}</button>
    }