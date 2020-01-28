import React from 'react'
import {Icon} from 'react-native-elements'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import RestaurantsScreenStacks from './RestaurantsStack'

const NavigationStacks= createBottomTabNavigator({
  //stack de navegacion

  Restaurants:{
    screen:RestaurantsScreenStacks,
    navigationOptions:()=>({
      tabBarLabel:'Restaurantes',
      tabBarIcon:({tintColor})=>(
        <Icon
          type="material-community"
          name="compass-outline"
          size={22}
          color={tintColor}
        />
      )
    })
  }
  })


export default createAppContainer(NavigationStacks)
