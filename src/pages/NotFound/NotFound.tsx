import { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = (): JSX.Element => {
    return (
        <div>
            <p>Sorry, page not found!</p>
            <Link to={"/"}>Back to Home</Link>
        </div>
    )
}

export default NotFound