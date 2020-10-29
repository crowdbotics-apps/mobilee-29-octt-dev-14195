import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen313428Navigator from '../features/BlankScreen313428/navigator';
import BlankScreen213427Navigator from '../features/BlankScreen213427/navigator';
import BlankScreen113426Navigator from '../features/BlankScreen113426/navigator';
import BlankScreen113424Navigator from '../features/BlankScreen113424/navigator';
import BlankScreen013418Navigator from '../features/BlankScreen013418/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen313428: { screen: BlankScreen313428Navigator },
BlankScreen213427: { screen: BlankScreen213427Navigator },
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
