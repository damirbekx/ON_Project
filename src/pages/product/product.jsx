import React from 'react'
import { useParams } from 'react-router-dom'


export const Product = () => {
    const { id } = useParams();
    console.log(id);
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        fetch(`http://localhost:5173/product/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);
    return (
        <div>
            <h1>{data.name}</h1>
            <h2>{data.text}</h2>
        </div>
    )
}
