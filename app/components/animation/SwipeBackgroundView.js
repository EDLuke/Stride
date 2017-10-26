import React from 'react';
import {Animated, View, Dimensions} from 'react-native';


export default class SwipeBackgroundView extends React.Component{
	state = {
		swipeRatio: new Animated.Value(0),
		swipeDir: Math.floor(Math.random() * 8),
		scrWidth: Dimensions.get('window').width,
		scrHeight: Dimensions.get('window').height,
		colors: ["#92B558", "#DC4C46", "#672E3B", "#F3D6E4", "#C48F65", "#223A5E", "#898E8C", "#005960"],
		colorIdx: 1,
		colorIdxPre: 0,
	}

	cycleAnimation(){
		Animated.timing(
			this.state.swipeRatio,
			{
				toValue: 1,
				duration: 5000,
			}
		).start(() => {
			var prevDir = this.state.swipeDir;
			var colorIdx = this.state.colorIdxPre;
			var colorIdxPre = colorIdx + 1;
			if(colorIdxPre > this.state.colors.length)
				colorIdxPre = 0;

			do{
				this.setState({
					swipeRatio: new Animated.Value(0),
					swipeDir: Math.floor(Math.random() * 8),
					colorIdx: colorIdx,
					colorIdxPre: colorIdxPre,
				});
			}while(prevDir != this.state.swipeDir);

			this.cycleAnimation();
		});
	}

	componentDidMount() {
		this.cycleAnimation();
	}

	render(){
		let {swipeRatio, swipeDir, scrWidth, scrHeight, colors, colorIdx, colorIdxPre} = this.state;

		return (
			<Animated.View
				style = {{
					backgroundColor: colors[colorIdx],
					width: scrWidth,
					height: scrHeight,
				}}>
				<Animated.View
				style = {{
					backgroundColor: colors[colorIdxPre],
					width: scrWidth,
					height: scrHeight,
					flex: swipeRatio,
				}}>
				</Animated.View>
				<Animated.View
					style = {{
					...this.props.style,
					
					opacity:1,
					position: 'absolute',
					left: 0,
					top: 0,
					width: scrWidth,
					height: scrHeight,
					alignItems: 'center',
    				justifyContent: 'center',
					}}
				>
					{this.props.children}
	      		</Animated.View>
	      	</Animated.View>
		)
	}
}
