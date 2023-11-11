import { useState } from "react"
import styled from "styled-components"

const BeerCardStyled = styled.div`
    display: flex;
    img{
        width: 100px;
    }
`

const BeerDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    input{
        border-radius: 15px;
        padding-left: 8px;
        width: 6em;
        height: 2em;
    }
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

const BeerCard = ({ beer, handleBeer }) => {
    const [price, setPrice] = useState([])

    const onChangePrice = (id, price) => {
        setPrice(price)
        handleBeer(id, price)
    }

    return (
        <BeerCardStyled>
            <div>
                <img src={beer.image} alt=""></img>
            </div>
            <BeerDescription>
                <h2>{beer.name}</h2>
                <p>{beer.ml + ' ml'}</p>
                <input type="number" placeholder="R$" value={price} onChange={(e) => onChangePrice(beer.id, e.target.value)} className="cerveja"/>
            </BeerDescription>
        </BeerCardStyled>
    )
}

const BeerCardList = ({beers,handleBeer}) => {
    return(
        (beers.map(beer =>
            <BeerCard key={beer.id} beer={beer} isOther={beer.name === 'Outros'} handleBeer={handleBeer}/>
        ))
    )
}

export default BeerCardList
