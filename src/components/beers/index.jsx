import styled from "styled-components"
import BeerCards from "./beercards"


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
    return(
        <BeerSection>
        <BeerContainer>
            <BeerCards/>
        </BeerContainer>
        <ButtonContainer>
            <input type="submit" value="Calcular"/>
            <input type="submit" value="Limpar"/>
        </ButtonContainer>
        <div className="resultado"></div>
        </BeerSection>
    )
}

export default Beers