import {createStackNavigator} from 'react-navigation-stack'
import RestaurantsScreen from '../screens/Restaurants'

export const RestaurantsScreenStacks = createStackNavigator({
  Restaurants:{
    screen:RestaurantsScreen,
    navigationOptions:()=>({
      title:"Restaurantes"
    })
  }
})

export default RestaurantsScreenStacks