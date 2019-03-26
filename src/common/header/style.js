import styled from 'styled-components';
import logoPic from '../../statics/logo2.png'
export const HeaderWrapper = styled.div`
	position: relative;
	height: 56px;
	border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
	href: '/'
})`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width:130px;
	height:56px;
	background:url(${logoPic});
	background-size: contain;
`
export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right:70px;
	box-sizing: border-box;
	margin: 0 auto;
`
export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left{
		float: left;
	}
	&.right{
		float: right;
		color: #969696;
		
		.iconfont{
			font-size:20px;
		}
	}
	&.active{
		color: #df1e41;
	}
`