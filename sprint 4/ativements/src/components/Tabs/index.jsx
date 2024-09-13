import { Paragraph } from "../Texts";

export const Tabs = ({ places, setSelectedPlace, selectedPlace }) => {
    return (
        <ul className="list-none w-full flex gap-5 mt-10 flex-wrap">
            {
                places.length
                    ? places.map((item, index) => {
                        return (
                            <li className={selectedPlace === item.id && `border-b-2 border-primary-blue text-primary-blue`}>
                                <a
                                    className="p-5 text-center w-[200px] font-semibold text-lg flex justify-center"

                                    onClick={e => setSelectedPlace(item.id)}
                                >{item.nome}</a>
                            </li>
                        );
                    })
                    : <Paragraph>Nenhum local encontrado</Paragraph>
            }
        </ul>
    );
}