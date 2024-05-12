import useSWR from "swr";

import { baseURL } from "../constants/baseURL";

export const useProducts = () => {
    const { data, error, isLoading } = useSWR(`${baseURL}/products`);
   
    return {
        products: data,
        isLoading,
        isError: error
    };
};