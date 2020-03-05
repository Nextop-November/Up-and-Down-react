import React from 'react';
import * as queryString from 'query-string';
import styled , { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    @import url("../font/NanumSquare/nanumsquare.css");
    html {
        margin: 0 auto;
        background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
        background-repeat:no-repeat;
        background-size : auto;
        height: 100%;
        width : 100%;
    }
    body {
        font-family: 'NanumSquare', sans-serif;
        color:white;
    }
`;

const Container = styled.div`
    
`;

const InputForm = styled.div`
    display:block;

`;

const TitleImg = styled.img``;

const QueryInput = styled.input ``;

const SearchButton = styled.input``;

const ProductInfoTable = styled.table`
    border: 1px solid white;
    & > tr>th{
        border:1px solid white;
    }

`;

class SearchView extends React.Component{
    
    
    constructor(props) {
        super(props);
    }

    
    render() {

        console.log(this.props);
        const getQuery = queryString.parse(this.props.location.search);
        console.log(getQuery.query);
        return(
            <Container>
                <GlobalStyle />
                <InputForm>
                <TitleImg/> <QueryInput type='text' value={getQuery.query}/> <SearchButton type='button'/>
                </InputForm>
                <ProductInfoTable border cellpadding='10'>
                    <tr>
                        <th rowSpan='4'>image</th>
                        <th colSpan='3'>Product Name</th>
                    </tr>
                    <tr>
                        <th rowSpan='3'>explain</th>
                        <th>HighPrice</th>
                        <th rowSpan='3'>SalePercent</th>
                    </tr>
                    <tr>
                        <th>RecentPrice</th>
                    </tr>
                    <tr>
                        <th>LowPrice</th>
                    </tr>

                </ProductInfoTable>
            </Container>
        );
    }
};

export default SearchView;