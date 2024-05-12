import { FC } from 'react'

import { baseURL } from '../../constants/baseURL';
import { addSingleProduct } from '../../utils/helpers/addSingleProduct';
import useSWRMutation from 'swr/mutation';

import "./AddSingleProduct.scss";

const dto = {
    title: "New Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, laudantium aut.",
    price: 325,
    category: "unknown"
    
}

const AddSingleProduct: FC = (): JSX.Element => {
    const { trigger, isMutating } = useSWRMutation(`${baseURL}/products`, addSingleProduct);

    const handleAddProduct = async () => await trigger(dto);

    return (
        <button 
            className="add__single-product"
            disabled={isMutating}
            onClick={handleAddProduct}
        >
            { isMutating ? "Please wait..." : "Add a New Product" }
        </button>
    )
}

export default AddSingleProduct