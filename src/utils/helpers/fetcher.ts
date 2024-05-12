import { rapidAPIoptions as options } from "../../constants/rapidAPIoptions/rapidAPIoptions";

export const fetcher = (SWRKey: string) => {
    const response = fetch(SWRKey, options).then((data) => data.json());

    return response;
};