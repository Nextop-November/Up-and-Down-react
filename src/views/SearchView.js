import React from 'react';
import * as queryString from 'query-string';

class SearchView extends React.Component{
    
    
    constructor(props) {
        super(props);
    }

    
    render() {

        console.log(this.props);
        const getQuery = queryString.parse(this.props.location.search);
        console.log(getQuery.query);
        return(
            <main>
                검색 결과 화면
                {getQuery.query}
 
            </main>
        );
    }
};

export default SearchView;