import React from 'react';
import * as queryString from 'query-string';
import styled , { createGlobalStyle } from 'styled-components';
import Category from '../components/category';


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

/*

TODO:   컴포넌트 만들어서 카테고리 데이터 가져오는 기능 만들기
        카테고리 요청 만들기 
        데이터는 가짜 const data 선언해서 만들기.

        컴포넌트간 넘길때는 Main 클래스에서 처리하고 연결해야함.
        !!! : 절대로 java class 처럼 직방으로 Main이 아닌 컴포넌트를 가져오면 안된다.


*/



class SearchView extends React.Component{
    
    
    constructor(props) {
        super(props); 
    }

    render() {
        
        const CategoryList = 
        //카테고리 종류 데이터 나중에 서버 데이터 가져와야 됨.
        [
            {
                name : 'CPU',
                options : ['cpu-name1','cpu-name2']
            },
            {
                name : 'VGA',
                options : ['vga-name1','vga-name2']
            },
            {
                name : 'RAM',
                options : ['ram-name1','ram-name2']
            },
        ];
            

        console.log(this.props);
        const getQuery = queryString.parse(this.props.location.search);
        console.log(getQuery.query);
        return(
            <Container>
                <InputForm>
                <TitleImg/> <QueryInput type='text' value={getQuery.query}/> <SearchButton type='button'/>
                </InputForm>
                <Category CategoryList={CategoryList} />


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