import { NavigationProp } from "@react-navigation/native";

type StackParamList = {
    Home: undefined;
    Detail: undefined;
};
type HomeScreenProp = NavigationProp<StackParamList, 'Home'>; 


type AuthParamList = {
    Login: undefined;
    Register: undefined;
};
type AuthProp = NavigationProp<AuthParamList, 'Login'>; 

export {AuthProp, HomeScreenProp}