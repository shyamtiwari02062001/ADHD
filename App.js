import React,{useEffect} from "react";
import{ NavigationContainer }	from	"@react-navigation/native";
import{ createStackNavigator }	from	"@react-navigation/stack";
import SplashScreen	from	"./screens/splashscreen/splashscreen";
import DashboardScreen from "./screens/Dashboard/dashboardscreen";
import TurnAround from "./screens/TurnAround/TurnAround";
import FindAllObjects from "./screens/FindAllObjects/FindAllSimilarImage";
import Reaction from "./screens/Reaction/ReactionPage";
import MemorizePicture from "./screens/MemorizePicture/MemorizePicture";
import FindNumbers from "./screens/FindNumbers/FindNumbersPage";
import Count from "./screens/Count/CountPage";
import Close from "./components/close";
const Stack = createStackNavigator();
import * as ScreenOrientation from "expo-screen-orientation";
const  App=()=>{
	useEffect(()=>{
		ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.LANDSCAPE
		);
	});
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false,}}
				initialRouteName="Splash"
			>
				<Stack.Screen name="Splash"	component={SplashScreen}/>
				<Stack.Screen name="Dashboard" component={DashboardScreen}/>
				<Stack.Screen name="TurnAround" component={TurnAround}/>
				<Stack.Screen name="FindAllObjects" component={FindAllObjects}/>
				<Stack.Screen name="Reaction" component={Reaction}/>
				<Stack.Screen name="Close" component={Close}/>
				<Stack.Screen
					name="MemorizePicture"
					component={MemorizePicture}
				/>
				<Stack.Screen name="FindNumbers" component={FindNumbers}/>
				<Stack.Screen name="Count" component={Count}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;