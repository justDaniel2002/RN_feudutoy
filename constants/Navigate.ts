import { NavigationProp } from "@react-navigation/native";

type StackParamList = {
    Home: undefined;
    Detail: undefined;
};
type HomeScreenProp = NavigationProp<StackParamList, 'Home'>; 

export default HomeScreenProp