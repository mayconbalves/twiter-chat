import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

import Login from './pages/Login'
import Timeline from './pages/Timeline'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    App: createStackNavigator({
      Timeline
    })
  })
)

export default Routes