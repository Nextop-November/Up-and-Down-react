import React from 'react';
import * as queryString from 'query-string';
import styled , { createGlobalStyle } from 'styled-components';
import Category from '../components/category';
import ProductList from '../components/ProductList';


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
        this.state = {
            keyword:[],

        }
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

        const ProductInfo = 
        //상품별 데이터
        [
            {
                image: 'https://img.favpng.com/20/13/6/apple-logo-business-iphone-png-favpng-hyzjSfZY66wqwfvuMkgRbVwFw.jpg',
                name: 'APPLE 맥북에어 MD712KH/A',
                categories: [
                    "29.46cm(11.6인치)", "인텔", "코어i5-4세대", "하스웰", "i5-4250U 1.3GHz(2.6GHz)", "듀얼코어", "1366x768", "LPDDR3(온보드)", "4GB", "SSD", "256GB", "HD 5000", "VRAM:시스템메모리공유", "802.11n/ac 무선", "블루투스 4.0", "웹캠", "썬더볼트", "USB 3.0", "USB 2.0", "키보드 라이트", "Mac OS X", "두께: 17mm", "1.08kg", "일반유통상품", "용도: 사무, 휴대용", "맥북에어 리프레시"
                ],
                lowest: '50',
                highest: '100',
                current: '75'
            },{
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/LACMTA_Square_Orange_Line.svg/1200px-LACMTA_Square_Orange_Line.svg.png',
                name: 'B',
                categories: [
                    'ads', 'dafs', 'erq'
                ],
                lowest: '89',
                highest: '3489',
                current: '987'
            },{
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/LACMTA_Square_Orange_Line.svg/1200px-LACMTA_Square_Orange_Line.svg.png',
                name: 'C',
                categories: [
                    'vc', 'g', 'yyt'
                ],
                lowest: '456',
                highest: '987654567',
                current: '45678'
            },
        ]
            
        const keywordState = this.state.keyword;
		const categoryChecked = (event) => {
			if (event.target.checked) {
				this.setState({
					keyword: keywordState.concat(event.target.id),
				});
				console.log(keywordState + " : " + event.target.id);
			}
			else {
				keywordState.splice(keywordState.indexOf(event.target.id), 1);
				this.setState({
					keyword: keywordState,
				});
				
				console.log(keywordState + " : " + event.target.id);
			}
			console.log(keywordState);
		}
		// 데이터 HTML로 가공하는 부분
		const categorySubmit = () => {
			console.log(keywordState);
			//console.log(tmp.value);
		};

        const getQuery = queryString.parse(this.props.location.search);

        return(
            <Container>
                <InputForm>
                <TitleImg/> <QueryInput type='text' value={getQuery.query}/> <SearchButton type='button'/>
                </InputForm>
                
				<Category CategoryList={CategoryList}
					categoryChecked={categoryChecked}
					categorySubmit={categorySubmit} />

                <ProductList info={ProductInfo} />
            </Container>
        );
    }
};

export default SearchView;


