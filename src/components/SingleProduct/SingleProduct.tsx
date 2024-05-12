import { FC } from 'react'
import { IProduct } from '../../ts/interfaces/IProduct'

import "./SingleProduct.scss"

const SingleProduct: FC<IProduct> = ({ id, title, description, category, price }): JSX.Element => {
    return (
        <div className="product">
            <h3 className="product__title">{title}</h3>
            <ul className="product__list">
                <li className="product__list-item">ID: {id}</li>
                <li className="product__list-item">Desc: {description}</li>
                <li className="product__list-item">Category: {category}</li>
                <li className="product__list-item">Price: ${price}</li>
            </ul>
        </div>
    )
}

export default SingleProduct