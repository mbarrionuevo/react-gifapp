import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGif';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }) {

    const { imgs, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <h4 className="animate__animated animate__flash">Loading...</h4>}
            <div className="card-grid">
                {
                    imgs.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}
