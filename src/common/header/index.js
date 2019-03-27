import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
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
	constructor(props){
		super(props);
		this.state = {
			focused:false
		}
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
	}
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
							in={this.state.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.state.focused ? 'focused' : ''}
								onFocus={this.handleInputFocus}
								onBlur={this.handleInputBlur}
							></NavSearch>
						</CSSTransition>
					<i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
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

	handleInputFocus(){
		this.setState({
			focused:true
		})
	}
	handleInputBlur(){
		this.setState({
			focused:false
		})
	}
}

export default Header