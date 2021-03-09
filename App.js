import React,{useEffect} from "react";
import{ NavigationContainer }	from	"@react-navigation/native";
import{ createStackNavigator }	from	"@react-navigation/stack";
import SplashScreen	from	"./screens/splashscreen/splashscreen";
import DashboardScreen from "./screens/Dashboard/dashboardscreen";
import TurnAround from "./screens/TurnAround/TurnAround";
import FindAllObjects from "./screens/FindAllObjects/FindAllSimilarImage";
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
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;