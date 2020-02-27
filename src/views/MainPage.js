import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.div`
    margin: 0 auto;
    text-align: center;
    display: table;
`

const MainFont = styled.p`
    font-family:Times;
    font-style: italic;
`

const Title = styled(MainFont)`
    font-size: 60px;
    color: pink;
`

const SearchFont = styled(MainFont)`
    font-size: 34px;
    color: lightgray;
    margin-top: -51px;
    margin-left: -552px;
`

const Block = styled.div`
    display: inline-block;
    height: 50px;
`

const SearchBar = styled(Block)`
    display: inline-block;
    width: 600px;
    background-color: skyblue;
`

const SearchIcon = styled(Block)`
    width: 50px;
    background-color: lightgreen;
`

const MenuIcon = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 50px;
    height: 50px;
    background-color: black;
`

const MenuFont = styled.p`
    position: absolute;
    left: 8px;
    top: -50px;
    color: white;
    font-size: 50px;
`

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Main>
                <header>
                    <Title>up N down</Title>
                </header>

                <nav>
                    <SearchBar/>
                    <SearchIcon/>
                    <SearchFont>Search</SearchFont>
                </nav>

                <section>
                    <MenuIcon/>
                    <MenuFont>C</MenuFont>
                </section>
            </Main>
        )
    }
}

export default MainPage;