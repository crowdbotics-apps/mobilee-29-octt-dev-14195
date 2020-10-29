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
    TextInput_4: "",
    Switch_5: true,
    CheckBox_6: true,
    CheckBox_7: true,
    DateTimePicker_9: new Date("")
  }

  render = () => (
    <View>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen113424")}
      >
        <Text>Sample text content</Text>
      </TouchableOpacity>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <Switch
        value={this.state.Switch_5}
        onValueChange={nextChecked => this.setState({ Switch_5: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_6}
        onPress={nextChecked => this.setState({ CheckBox_6: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_7}
        onPress={nextChecked => this.setState({ CheckBox_7: nextChecked })}
      />
      <Icon name="star" />
      <DateTimePicker
        date={this.state.DateTimePicker_9}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_9: selectedDate })
        }
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
  Image_10: {}
})
