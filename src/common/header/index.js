import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store'
import {connect} from 'react-redux';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button,
	SearchWrapper
}from './style'



class Header extends Component {
	getListArea(){
		const {focused, list} = this.props;
		if(focused){
			return (
					<SearchInfo>
						<SearchInfoTitle>
							热门搜索
							<SearchInfoSwitch>换一批</SearchInfoSwitch>
						</SearchInfoTitle>
						<SearchInfoList>
							{
								list.map((item) => {
									
									return <SearchInfoItem key={item}>{item}</SearchInfoItem>
								})
							}
							
						</SearchInfoList>
					</SearchInfo>
				)
		}else {
			return null;
		}
}
	render(){
		const {focused, handleInputFocus, handleInputBlur} = this.props;
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">Home</NavItem>
					<NavItem className="left">Download App</NavItem>
					<NavItem className="right">Login</NavItem>
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={handleInputFocus}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
					<i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
					{this.getListArea()}
				</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="writing">
						<i className="iconfont">&#xe616;</i>
						Create Articles
					</Button>
					<Button className="reg">Register</Button>					
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state) => {
		return {
			focused: state.getIn(['header', 'focused']),
			list: state.getIn(['header', 'list'])
		
		}
	}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(){			
			dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			
			dispatch(actionCreators.searchBlur());
		}
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(Header)