import { useState } from "react"
import styled from "styled-components"
import BeerCardList from "./beercardslist"
import beersData from "./beercardslist/beers.json"

const BeerSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4em;
    margin-top: 3em;
`

const BeerContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4em;
    width: 1000px;
`
const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    input{
        font-size: 15px;
        font-weight: bolder;
        width: 7em;
        height: 30px;
        border-radius: 15px;
    }

`

const Beers = () => {
    const [beers, setBeers] = useState(beersData)
    let [bestBeerName, setBestBeerName] = useState('');

    const handleBeer = (id,price) => {
        beers[id].price = price
        setBeers(beers)
    }

    const onCalc = () => {
        const bestBeer = getTheBest()
        setBestBeerName(bestBeer.name)
    }

    const getTheBest = () => {
        let bestBeer = beers[0];
        beers.map(beer => {
            const priceByMl = beer.price / beer.ml
            if(priceByMl < bestBeer.price) bestBeer = beer
        })

        return bestBeer
    }

    return(
        <BeerSection>
            <BeerContainer>
                <BeerCardList beers={beers} handleBeer={handleBeer}/>
            </BeerContainer>
            <ButtonContainer>
                <input type="submit" value="Calcular" onClick={onCalc}/>
                <input type="submit" value="Limpar"/>
            </ButtonContainer>
            <div className="resultado">{bestBeerName}</div>
        </BeerSection>
    )
}

export default Beers