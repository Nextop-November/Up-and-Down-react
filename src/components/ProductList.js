/*
[{
    image
    name
    categories: []
    lowest:
    highest:
    current:
}]
*/

import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.div`
    margin: 0 auto;
    width: 90%;
    text-align: center;
`

const ProductTable = styled.table`
    width: 1700px;
    margin: 0 0 20px 0;
    & > tr > th{
        border: 1px solid white;
    }
    border-spacing: 0px;
`;

const Wordbreak = styled.th`
    word-break: break-all;
`;

class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Main>
                {this.props.info.map((i) => {
                    return (<Info image = {i.image}
                        name = {i.name}
                        categories = {i.categories.join(' / ')}
                        lowest = {i.lowest}
                        highest = {i.highest}
                        current = {i.current} />)
                })}
            </Main>
        )
    }
}

class Info extends Component {
    render() {
        return (
            <ProductTable>
                <tr>
                    <th rowSpan = '4' width = '10%' height = '10%'><img src = {this.props.image} width = '100%'/></th>
                    <th colSpan = '2' width = '600'>{this.props.name}</th>
                </tr>

                <tr>
                    <Wordbreak rowSpan = '3' width = '70%'>{this.props.categories}</Wordbreak>
                    <th>{this.props.highest}</th>
                </tr>

                <tr>
                    <th>{this.props.current}</th>
                </tr>

                <tr>
                    <th>{this.props.lowest}</th>
                </tr>
            </ProductTable>
        )
    }
}

export default ProductList;