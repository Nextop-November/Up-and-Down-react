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
    display: inline-block;
    font-size: 50px;
    color: pink;
    margin-top: 50px;
    margin-right: 10px;
`

const SearchFont = styled(MainFont)`
    position: absolute;
    display: inline-block;
    font-size: 34px;
    color: lightgray;
    margin-top: 60px;
    margin-left: -648px;
`

const NumberFont = styled.p`
    position: absolute;
    display: inline-block;
    margin-left: -600px;
    margin-top: 4px;
    font-size: 20px;
`

const ProductFont = styled.p`
    position: absolute;
    display: inline-block;
`

const ImgFont = styled(ProductFont)`
    font-size: 28px;
    margin-left: -740px;
    margin-top: 50px;
`

const TitleFont = styled(ProductFont)`
    font-size: 28px;
    font-weight: 700;
    margin-left: -639px;
    margin-top: 4px;
`

const GraphFont = styled(ProductFont)`
    font-size: 28px;
    margin-left: -639px;
    margin-top: 42px;
`

const HighestFont = styled(ProductFont)`
    font-size: 20px;
    margin-left: -198px;
    margin-top: 44px;
`

const RecentFont = styled(ProductFont)`
    font-size: 20px;
    margin-left: -198px;
    margin-top: 77px;
`

const LowestFont = styled(ProductFont)`
    font-size: 20px;
    margin-left: -198px;
    margin-top: 110px;
`

const FluctuationFont = styled(ProductFont)`
    font-size: 30px;
    margin-left: -66px;
    margin-top: 66px;
`

const Block = styled.div`
    display: inline-block;
    height: 50px;
`

const SearchBar = styled(Block)`
    width: 600px;
    background-color: skyblue;
    margin-bottom: -10px;
`

const SearchIcon = styled(Block)`
    width: 50px;
    background-color: lightgreen;
    margin-bottom: -10px;
`

const ProductImg = styled(Block)`
    width: 139px;
    height: 139px;
    background-color: yellow;
`

const ProductTitle = styled(Block)`
    position: absolute;
    width: 649px;
    height: 40px;
    background-color: #BCF5A9;
`

const ProductGraph = styled(Block)`
    width: 450px;
    height: 99px;
    background-color: #CEE3F6;
`

const ProductFluctuation = styled(Block)`
    width: 99px;
    height: 99px;
    background-color: #F2F2F2;
`

const NumberBar = styled(Block)`
    display: inline-block;
    width: 600px;
    height: 30px;
    background-color: skyblue;
`

const ProductPrice = styled(Block)`
    width: 100px;
    height: 33px;
`

const PriceHigher = styled(ProductPrice)`
    background-color: green;
`

const PriceRecent = styled(ProductPrice)`
    position: absolute;
    margin-left: -100px;
    margin-top: 73px;
    background-color: red;
`

const PriceLower = styled(ProductPrice)`
    position: absolute;
    margin-left: -100px;
    margin-top: 40px;
    background-color: orange;
`

class ListPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Main>
                <header>
                    <Title>up N down</Title>
                    <SearchBar/>
                    <SearchIcon/>
                    <SearchFont>Search</SearchFont>
                </header>

                <section>
                    <ProductImg/>
                    <ProductTitle/>
                    <ProductGraph/>
                    <PriceHigher/>
                    <PriceRecent/>
                    <PriceLower/>
                    <ProductFluctuation/>
                    <TitleFont>Title</TitleFont>
                    <ImgFont>Img</ImgFont>
                    <GraphFont>Graph</GraphFont>
                    <HighestFont>Highest</HighestFont>
                    <RecentFont>Recent</RecentFont>
                    <LowestFont>Lowest</LowestFont>
                    <FluctuationFont>N%</FluctuationFont>
                </section>

                <footer>
                    <NumberBar/>
                    <NumberFont>Number</NumberFont>
                </footer>
            </Main>
        )
    }
}

export default ListPage;