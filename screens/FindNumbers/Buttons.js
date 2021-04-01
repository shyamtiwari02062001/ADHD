import React from "react";
import {View,Image,TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
const Buttons= (props) =>{
	return (
		<View style={{margin:5,borderWidth:2,borderRadius:20}}>
			<TouchableOpacity onPress={()=>{props.fun(props.source);}}>
				<Image source={props.source}
					style={{height:50,width:50,borderRadius:20}}
				/>
			</TouchableOpacity>
		</View>
	);
};
Buttons.propTypes={
	fun:PropTypes.any,
	source:PropTypes.any
};
export default Buttons;