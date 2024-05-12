import { rapidAPIoptions } from "../../constants/rapidAPIoptions/rapidAPIoptions";
import { IAddProduct } from "../../ts/interfaces/IAddProduct";

const { headers } = rapidAPIoptions;

export const addSingleProduct = (SWRKey: string, { arg }: { arg: IAddProduct }) => {
    const response = 
        fetch(SWRKey, {
            method: "POST",
            headers,
            body: JSON.stringify(arg)
        })
        .then((res) => res.json());

    return response;
};