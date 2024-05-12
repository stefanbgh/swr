import { FC } from 'react'

import { IProduct } from '../../ts/interfaces/IProduct';
import { AddSingleProduct, SingleProduct } from '..';

interface IProps {
    products: IProduct[];
}

const Products: FC<IProps> = ({ products }): JSX.Element => {
    return (
        <>
            <h1>Products info:</h1>
            <AddSingleProduct />
            {
                [...products]
                    .reverse()
                    .map((singleProduct: IProduct) => {
                        const { id, title, description, category, price } = singleProduct;

                        return  <SingleProduct
                                    key={id}
                                    id={id}
                                    title={title}
                                    description={description}
                                    category={category}
                                    price={price}
                                />
                })
            }
        </>
    )
}

export default Products