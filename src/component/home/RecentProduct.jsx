// https://api.escuelajs.co/api/v1/products

import React from 'react'
import { getRecent } from '../../api/product'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard'


function RecentProduct()
{
    const products = useLoaderData()

    return(
<>
</>
    )
}

export function loader({request : {signal}})
{
    return getRecent({signal})
}

