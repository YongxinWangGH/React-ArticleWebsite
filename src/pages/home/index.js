import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style'

class Home extends Component {
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className="banner-img" src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Books/XCM_Manual_1104748_Spring_Reading_1500x300_Books_ID_1104748_us_books_spring_reading_desktop_hero_1500x300_WCTA_jpg.jpg"/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrapper>
			)
	}

	componentDidMount(){
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			const action = {
				type: 'change_home_data',
				topicList: result.topicList,
				articleList: result.articleList,
				recommendList: result.recommendList
			}
			this.props.changeHomeData(action);
		})
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData(action){
		dispatch(action);
	}
})

export default connect(null, mapDispatch)(Home)