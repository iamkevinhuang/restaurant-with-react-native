import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SearchScreen from './scr/screens/SearchScreen'
import ResultsShowScreen from './scr/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: 'BusinessSearch'
  }
});

export default createAppContainer(navigator);
