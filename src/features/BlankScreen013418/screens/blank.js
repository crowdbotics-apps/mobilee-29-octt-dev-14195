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
    DateTimePicker_5: new Date(""),
    Switch_9: true,
    CheckBox_13: true,
    CheckBox_15: true,
    TextInput_19: "",
    CheckBox_31: true,
    CheckBox_47: true
  }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_5}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_5: selectedDate })
        }
      />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_9}
        onValueChange={nextChecked => this.setState({ Switch_9: nextChecked })}
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_13}
        onPress={nextChecked => this.setState({ CheckBox_13: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_15}
        onPress={nextChecked => this.setState({ CheckBox_15: nextChecked })}
      />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_19}
        onChangeText={nextValue => this.setState({ TextInput_19: nextValue })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_31}
        onPress={nextChecked => this.setState({ CheckBox_31: nextChecked })}
      />
      <Image />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_47}
        onPress={nextChecked => this.setState({ CheckBox_47: nextChecked })}
      />
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
  Button_4: {},
  View_1: {},
  Text_2: {},
  Button_4: {},
  Icon_6: {},
  View_1: {},
  View_1: {},
  Text_3: {},
  DateTimePicker_5: {},
  Button_7: {},
  Switch_9: {},
  Slider_11: {},
  CheckBox_13: {},
  CheckBox_15: {},
  View_1: {},
  Text_3: {},
  DateTimePicker_5: {},
  Button_7: {},
  Switch_9: {},
  Slider_11: {},
  CheckBox_13: {},
  CheckBox_15: {},
  Button_17: {},
  TextInput_19: {},
  View_1: {},
  Text_3: {},
  DateTimePicker_5: {},
  Button_7: {},
  Switch_9: {},
  Slider_11: {},
  CheckBox_13: {},
  CheckBox_15: {},
  Button_17: {},
  TextInput_19: {},
  CheckBox_31: {},
  View_1: {},
  Text_3: {},
  DateTimePicker_5: {},
  Button_7: {},
  Switch_9: {},
  Slider_11: {},
  CheckBox_13: {},
  CheckBox_15: {},
  Button_17: {},
  TextInput_19: {},
  CheckBox_31: {},
  Image_33: {},
  View_1: {},
  Text_3: {},
  DateTimePicker_5: {},
  Button_7: {},
  Switch_9: {},
  Slider_11: {},
  CheckBox_13: {},
  CheckBox_15: {},
  Button_17: {},
  TextInput_19: {},
  CheckBox_31: {},
  Image_33: {},
  CheckBox_47: {}
})
