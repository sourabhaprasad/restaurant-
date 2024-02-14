// Update your Menu component
import React from 'react';

export default function Menu({ art }) {
    return (
        <article className='menu'>
            <img src={art.imageUrl} alt={art.name} className='food-image' />
            <div className='menu-details'>
                <p><b>{art.name}</b></p>
                <p><b>Price: &#8377;{art.price}</b></p>
                <button>Add to Cart!</button>
            </div>
        </article>
    );
}
