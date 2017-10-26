import React from 'react';
import {Animated, View, Dimensions} from 'react-native';


export default class SwipeBackgroundView extends React.Component{
	state = {
		swipeVert: new Animated.Value(0),
		swipeHorz: new Animated.Value(0),
		swipeDir: Math.floor(Math.random() * 7),
		scrWidth: Dimensions.get('window').width,
		scrHeight: Dimensions.get('window').height,
		colors: ["#92B558", "#DC4C46", "#672E3B", "#F3D6E4", "#C48F65", "#223A5E", "#898E8C", "#005960", "#9C9A40", "#4F84C4", "#D2691E"],
		colorIdx: 0,
		colorIdxPre: 1,
	}

	cycleAnimation(){
		Animated.parallel(
		[
		Animated.timing(
			this.state.swipeVert,
			{
				toValue: this.state.scrHeight,
				duration: 3000,
			}
		),
		Animated.timing(
			this.state.swipeHorz,
			{
				toValue: this.state.scrWidth,
				duration: 3000,
			}
		)
		]).start(() => {
			var prevDir = this.state.swipeDir;
			var colorIdx = this.state.colorIdxPre;
			var colorIdxPre = colorIdx + 1;
			if(colorIdxPre >= this.state.colors.length)
				colorIdxPre = 0;

			do{
				this.setState({
					swipeVert: new Animated.Value(0),
					swipeHorz: new Animated.Value(0),
					swipeDir: Math.floor(Math.random() * 7),
					colorIdx: colorIdx,
					colorIdxPre: colorIdxPre,
				});
			}while(prevDir == this.state.swipeDir);

			this.cycleAnimation();
		});
	}

	componentDidMount() {
		this.cycleAnimation();
	}

	frontViewStyle = function(swipeDir, swipeVert, swipeHorz, scrWidth, scrHeight, colors, colorIdx) {
		if(swipeDir == 0){
			return {
				backgroundColor: colors[colorIdx],
				width: scrWidth,
				height: scrHeight, 
				top: swipeVert,	
			}
		}
		else if(swipeDir == 1){
			return {
				backgroundColor: colors[colorIdx],
				width: scrWidth,
				height: scrHeight, 
				bottom: swipeVert,	
			}	
		}
		else if(swipeDir == 2){
			return {
				backgroundColor: colors[colorIdx],
				width: scrWidth,
				height: scrHeight, 
				left: swipeHorz,	
			}	
		}
		else if(swipeDir == 3){
			return {
				backgroundColor: colors[colorIdx],
				width: scrWidth,
				height: scrHeight, 
				right: swipeHorz,	
			}	
		}
		else if(swipeDir == 4){
			return {
				backgroundColor: colors[colorIdx],
				width: scrWidth,
				height: scrHeight, 
				top: swipeVert,	
				left: swipeHorz,	
			}	
		}
		else if(swipeDir == 5){
			return {
				backgroundColor: colors[colorIdx],
				width: scrWidth,
				height: scrHeight, 
				bottom: swipeVert,	
				left: swipeHorz,	
			}	
		}
		else if(swipeDir == 6){
			return {
				backgroundColor: colors[colorIdx],
				width: scrWidth,
				height: scrHeight, 
				top: swipeVert,	
				right: swipeHorz,	
			}	
		}
		else if(swipeDir == 7){
			return {
				backgroundColor: colors[colorIdx],
				width: scrWidth,
				height: scrHeight, 
				bottom: swipeVert,	
				right: swipeHorz,	
			}	
		}
	}

	render(){
		let {swipeVert, swipeHorz, swipeDir, scrWidth, scrHeight, colors, colorIdx, colorIdxPre} = this.state;

		return (
			<Animated.View
				style = {{
					backgroundColor: colors[colorIdxPre],
					width: scrWidth,
					height: scrHeight,
				}}>
				<Animated.View
				style = {this.frontViewStyle(swipeDir, swipeVert, swipeHorz, scrWidth, scrHeight, colors, colorIdx)}>
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
