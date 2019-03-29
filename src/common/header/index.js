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

const getListArea = (show) => {
	if(show){
		return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
						<SearchInfoItem>教育</SearchInfoItem>
					</SearchInfoList>
				</SearchInfo>
			)
	}else {
		return null;
	}
}

class Header extends Component {
	render(){
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
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focused' : ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
					<i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
					{getListArea(this.props.focused)}
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
			focused: state.getIn(['header', 'focused'])
		
		}
	}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(){			
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			
			dispatch(actionCreators.searchBlur());
		}
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(Header)