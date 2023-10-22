import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Started from './Component/Started';
import ListProduct from './Component/ListProduct';
import DetailProduct from './Component/DetailProduct';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Started" component={Started} />
                <Stack.Screen name="ListProduct" component={ListProduct} />
                <Stack.Screen name="DetailProduct" component={DetailProduct} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
