import { TailSpin } from "react-loader-spinner";

export const LoadSpinner = () => {
    return (
        <TailSpin
            visible={true}
            height="20"
            width="20"
            color="#fafafa"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
}