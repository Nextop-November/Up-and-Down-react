import React, { Component } from 'react';
import styled , { createGlobalStyle } from 'styled-components';
import logo from '../images/title2.png';
import SearchIcon from '../images/searchIcon2.png';
import * as queryParser from 'query-string';
import Graph from './Graph'



const Container = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-70%);
`;

const TitleImg = styled.img`
    width: 500px;
    -webkit-user-drag : none;
`;

const InputForm = styled.div`
    margin-top:30px;

`;

const QueryInput = styled.input`
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

const SearchButton = styled.input`
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
         const data = [
            {
              "id": "japan",
              "color": "hsl(100, 100%, 85%)",
              "data": [
                {
                  "x": "plane",
                  "y": 187
                },
                {
                  "x": "helicopter",
                  "y": 168
                },
                {
                  "x": "boat",
                  "y": 138
                },
                {
                  "x": "train",
                  "y": 208
                },
                {
                  "x": "subway",
                  "y": 174
                },
                {
                  "x": "bus",
                  "y": 272
                },
                {
                  "x": "car",
                  "y": 192
                },
                {
                  "x": "moto",
                  "y": 187
                },
                {
                  "x": "bicycle",
                  "y": 159
                },
                {
                  "x": "horse",
                  "y": 280
                },
                {
                  "x": "skateboard",
                  "y": 28
                },
                {
                  "x": "others",
                  "y": 49
                }
              ]
            }
          ];
        return (
            <Container>
                <TitleImg src={logo}/>
                <InputForm>
                    <QueryInput id='query' autoComplete='off' type='text'onKeyUp={this.SearchQuery} onChange={this.QueryState}/>
                    <SearchButton onClick="search" type='button'/> 
                    <Graph data={data} />
                </InputForm>
                
            </Container>
        )
    }
}

export default MainView;