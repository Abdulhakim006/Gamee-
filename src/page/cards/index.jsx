import React from 'react';
import { GameCard } from '../home/style';
import { useNavigate } from 'react-router-dom';

const Cards = (prop) => {
    const { item } = prop

    const navigate = useNavigate();

    return (
        <GameCard style={{border:"1px solid #fff"}}>
            <img src={item?.thumbnail} />
             <div className='text'>
                <h4 className='name'> {item?.title}  </h4>
                <p>  {item?.genre} {item?.platform} </p>
                 <button onClick={() => navigate(`/info/${item?.id}`)}>Steam Here</button>
            </div> 
        </GameCard>
    );
}

export default Cards;