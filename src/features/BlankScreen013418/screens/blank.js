import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen113424")}
      >
        <Text>Sample text content</Text>
      </TouchableOpacity>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  Switch_5: {},
  CheckBox_6: {},
  CheckBox_7: {},
  Icon_8: {},
  DateTimePicker_9: {},
  Image_10: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  Switch_5: {},
  CheckBox_6: {},
  CheckBox_7: {},
  Icon_8: {},
  DateTimePicker_9: {},
  Image_10: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  Switch_5: {},
  CheckBox_6: {},
  CheckBox_7: {},
  Icon_8: {},
  DateTimePicker_9: {},
  Image_10: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  Switch_5: {},
  CheckBox_6: {},
  CheckBox_7: {},
  Icon_8: {},
  DateTimePicker_9: {},
  Image_10: {},
  Button_12: {},
  Text_14: {},
  View_1: {},
  Text_2: {},
  View_1: {},
  Text_2: {},
  Button_4: {}
})
