import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native'
//to break up ios and android UI

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import Colors from '../constants/Colors'

const ProductsNavigator = createStackNavigator({
  ProductOverview: ProductOverviewScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.accentColor
    },
    headerTintColor: Colors.primaryColor
  }
})

export default createAppContainer(ProductsNavigator)