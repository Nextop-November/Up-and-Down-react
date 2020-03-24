import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.div`
    margin: 0 auto;
    text-align: center;
    display: table;
`

const MainFont = styled.p`
    font-family: Times;
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

const ProductFont = styled.p`
    display: inline-block;
`

const ImgFont = styled(ProductFont)`
    font-size: 28px;
`;


const TitleFont = styled(ProductFont)`
    font-size: 28px;
    font-weight: 700;
    margin-left: -990px;
    margin-top: -45px;
`

const GraphFont = styled(ProductFont)`
    font-size: 28px;
    margin-left: -740px;
    margin-top: 10px;
`

const RecentFont = styled(ProductFont)`
    font-size: 20px;
    margin-left: -154px;
    margin-top: 48px;
`

const SiteFont = styled(ProductFont)`
    font-size: 20px;
    margin-left: -142px;
    margin-top: 173px;
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

const ProductTitle = styled(Block)`
    display: block;
    width: 1000px;
    height: 60px;
    background-color: lightgreen;
`

const ProductImg = styled(Block)`
    width: 250px;
    height: 250px;
    background-color: yellow;
`

const ProductGraph = styled(Block)`
    width: 500px;
    height: 250px;
    background-color: skyblue;
`

const ProductPrice = styled(Block)`
    position: absolute;
    width: 250px;
    height: 125px;
    background-color: orange;
`

const ProductSite = styled(Block)`
    width: 250px;
    height: 125px;
    background-color: pink;
`

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '삼성 노트북',
            image: 'https://img.kr.news.samsung.com/kr/wp-content/uploads/2018/12/20181213-pr-notebook-1.jpg',
            // 최소, 현재, 최대 금액
            minimum: 1500000,
            now: 1600000,
            maximum: 190000,
            // 현금 사이트, 카드 사이트
            cashSite: 'https://www.naver.com/',
            cardSite: 'https://www.google.com/',
            // 가격 변화[]
            priceChanges: []
        }
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
                    <article>
                        <section>{ this.state.title }</section>
                        <section><img src={ this.state.image } width="100px" height="100px"/> </section>
                        <section>Graph</section>
                        <section>{ this.state.minimum }{ this.state.now }{ this.state.maximum }</section>
                        <section>{ this.state.cashSite }{ this.state.cardSite }</section>
                    </article>
                </section>

                <footer>
                </footer>
            </Main>
        )
    }
}

export default DetailPage;