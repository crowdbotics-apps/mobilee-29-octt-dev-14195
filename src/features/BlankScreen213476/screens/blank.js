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

  state = {
    Switch_2: true,
    CheckBox_3: true,
    CheckBox_4: true,
    TextInput_7: ""
  }

  render = () => (
    <View>
      <Switch
        value={this.state.Switch_2}
        onValueChange={nextChecked => this.setState({ Switch_2: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <Button
        title="Press me!"
        onPress={() => this.props.navigation.navigate("BlankScreen113457")}
      />
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen113457")}
      >
        <Text>Sample text content</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <Image />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Switch_2: {},
  CheckBox_3: {},
  CheckBox_4: {},
  Button_5: {},
  Text_6: {},
  TextInput_7: {},
  Image_8: {},
  View_1: {},
  Switch_2: {},
  CheckBox_3: {},
  CheckBox_4: {},
  Button_5: {},
  Text_6: {},
  TextInput_7: {},
  Image_8: {}
})
