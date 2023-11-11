import styled from "styled-components"
import beers from "./beers.json"

const BeerCard = styled.div`
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

const BeerCards = () => {
    return(
        (beers.map(beer => beer.name === 'Outros' ?  
            <BeerCard key={beer.id}>  
                <div>
                    <img src={beer.image} alt=""></img>
                </div>
                <BeerDescription>
                    <h2>{beer.name}</h2>
                    <input type="number" id="mloutros" placeholder="Qtd mls"/>
                    <input type="number" placeholder="R$"/>
                </BeerDescription>
            </BeerCard>:
            <BeerCard key={beer.id}>  
                <div>
                    <img src={beer.image} alt=""></img>
                </div>
                <BeerDescription>
                    <h2>{beer.name}</h2>
                    <p>{beer.ml + ' ml'}</p>
                    <input type="number" placeholder="R$" className="cerveja"/>
                </BeerDescription>
             </BeerCard>
        ))
    )
}

export default BeerCards
