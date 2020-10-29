import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen113426Navigator from '../features/BlankScreen113426/navigator';
import BlankScreen113424Navigator from '../features/BlankScreen113424/navigator';
import BlankScreen013418Navigator from '../features/BlankScreen013418/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen113426: { screen: BlankScreen113426Navigator },
BlankScreen113424: { screen: BlankScreen113424Navigator },
BlankScreen013418: { screen: BlankScreen013418Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
