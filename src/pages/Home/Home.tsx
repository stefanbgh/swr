import { FC } from 'react'

import { useProducts } from '../../utils/useProducts'
import { Products, Spinner, Error } from '../../components';

const Home: FC = (): JSX.Element => {
    const { products, isLoading, isError } = useProducts();

    if (isLoading) return <Spinner />;
    if (isError) return <Error />;

    return <Products products={products} />;
}

export default Home