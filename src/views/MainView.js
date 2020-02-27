import React, { Component } from 'react';
import styled , { createGlobalStyle } from 'styled-components';
import logo from '../images/title2.png';
import SearchIcon from '../images/searchIcon2.png';
import * as queryParser from 'query-string';



const GlobalStyle = createGlobalStyle`
    @import url("../font/NanumSquare/nanumsquare.css");
    html {
        margin: 0 auto;
        background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
        background-repeat:no-repeat;
        background-size : auto;
        height:100%;
        width : 100%;

        text-align : center;
  }
  body {
        font-family: 'NanumSquare', sans-serif;

        position:absolute;

        top:50%;
        left:50%;
        transform:translate(-50%,-70%);

  }
`

const Container = styled.div`
  position:relative;
  left:50%;
  transform:translateX(-50%);
`;


const TitleImg = styled.img`
    width: 500px;
    -webkit-user-drag : none;
`;

const InputForm = styled.div`
    margin-top:30px;

`;


const SearchWord = styled.input`
    background-color: rgba(0,0,0,0);
    border-style:solid;
    border-radius : 100px;
    border-color: white;
    border-width : 6px;
    font-size:20px;
    padding-left : 30px;
    padding-right : 30px;
    width : 500px;
    height: 50px;
    color : white;
    font-size:20px;
    
    :focus {
        outline:none;
    }
`;

const Submit = styled.input`

position:relative;
top:50%;
transform:translateY(25%);

background-image : url(${SearchIcon}); 
background-color:rgba(0,0,0,0);
background-repeat:no-repeat;
background-size:100%;
border: none;
cursor: pointer;
width : 45px;
height : 45px;
margin-left:7px;
`;

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state={
            query:'',
        }
    }
    
    QueryState = (event) =>{
        this.setState({
            query:event.target.value,
        })
        console.log(this.state.query);
    }

    SearchQuery = (event) => {
        if(event.key == 'Enter')
        {
            console.log("Entered!");
            this.props.history.push({
                pathname: '/search',
                search: '?query='+ this.state.query,
              })
        }
    }

     render() {
        return (
            
            <Container>
                <GlobalStyle />
                <TitleImg src={logo}/>
                <InputForm>
                    <SearchWord id='query' autoComplete='off' type='text'onKeyUp={this.SearchQuery} onChange={this.QueryState}/>
                    <Submit onClick="search" type='button'/> 
                    
                </InputForm>
            </Container>
        )
    }
}

export default MainView;