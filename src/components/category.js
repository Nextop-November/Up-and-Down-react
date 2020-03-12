
import React from 'react';
import styled from 'styled-components';
class Category extends React.Component{
    

    //TODO: 카테고리 리스트 데이터 다듬어야함.
    render(){
        // 데이터 가져오는 부분
        const cateList = this.props.CategoryList; 
        // 데이터 HTML로 가공하는 부분

        
        console.log(this.props.CategoryList);
        return(
            <table border ='1'>
                {cateList.map(el => (
                    <tr>
                        <th>{el.name}</th>
                        {el.options.map ( opt =>(
                            <td>
                            <input type='checkbox' id='cateOpt' value={opt}/>
                            <label for={opt}>{opt}</label>
                            </td>
                        ))}
                        
                    </tr>
                ))}
            </table>
        );
    }
}
export default Category;