import React from "react";
import styled from "styled-components";

class Category extends React.Component {
	
	//TODO: 카테고리 리스트 데이터 다듬어야함.
	render() {
		// 데이터 가져오는 부분'

		const cateList = this.props.CategoryList; //SearchView.js에 위치함.
		const categorySubmit = this.props.categorySubmit;
		const categoryChecked = this.props.categoryChecked;

		const categoryDeSelect=()=>{
			
		}
		return (
			<div>
				<table border="1">
					{cateList.map(el => (
						<tr>
							<th>{el.name}</th>
							{el.options.map(opt => (
								<td>
									<input type="checkbox" id={opt} class="classOpt" value={opt} onClick={categoryChecked} />
									<label for={opt}>{opt}</label>
								</td>
							))}
						</tr>
					))}
				</table>
				<input type="button" value="Category Search" onClick={categorySubmit} />
				<input type="button" value="Deselect All" onClick={categoryDeSelect} />
			</div>
		);
	}
}
export default Category;
