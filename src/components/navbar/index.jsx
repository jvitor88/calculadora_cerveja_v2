import styled from "styled-components"


const StyledNav = styled.nav`
    background: #FFD335 url(./nav-bg.png) no-repeat;
    background-size: cover;
    height: 200px;
    display: flex;
    justify-content: center;
    h1{
        font-size: 70px;
        margin-top: 0.3em;
        color: rgb(180, 3, 3);
        font-family: 'Lobster Two', sans-serif;
    }
`

const Navbar = () => {
    return(
        <StyledNav>
            <h1>Calculadora do Zé</h1>
        </StyledNav>
    )
}

export default Navbar