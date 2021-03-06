import React, {PropTypes} from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'
import {connect} from 'react-redux'
import Styles from './Styles/LoginScreenStyles'
import {Images, Metrics} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import {Actions as NavigationActions} from 'react-native-router-flux'
import {
  Button,
  Text as NBText,
  Contant,
  Form,
  Item,
  Input,
  Label
} from 'native-base'

class LoginScreen extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor(props) {
    super(props)
    this.state = {
      username: 'User Name',
      password: 'password',
      visibleHeight: Metrics.screenHeight,
      topLogo: {
        width: Metrics.screenWidth - 40
      }
    }
    this.isAttempting = false
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      NavigationActions.pop()
    }
  }

  componentWillMount() {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {
        width: 100,
        height: 70
      }
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {
        width: Metrics.screenWidth - 40
      }
    })
  }

  handlePressLogin = () => {
    // const { username, password } = this.state
    // this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    // this.props.attemptLogin(username, password);
    NavigationActions.dashboard({TabNumber: 1});
  }

  handleChangeUsername = (text) => {
    this.setState({username: text})
  }

  handleChangePassword = (text) => {
    this.setState({password: text})
  }

  render() {

    const {username, password} = this.state
    const {fetching} = this.props
    const editable = !fetching
    const textInputStyle = editable
      ? Styles.textInput
      : Styles.textInputReadonly
    return (
      <ScrollView contentContainerStyle={{
        justifyContent: 'center'
      }} style={[
        Styles.container, {
          height: this.state.visibleHeight
        }
      ]} keyboardShouldPersistTaps='always'>
        {/*<Image source={Images.logo} style={[Styles.topLogo, this.state.topLogo]} />*/}
        <View style={Styles.form}>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input ref='username' value={username} editable={editable} keyboardType='default' returnKeyType='next' autoCapitalize='none' autoCorrect={false} onChangeText={this.handleChangeUsername} underlineColorAndroid='transparent' onSubmitEditing={() => this.password._root.focus()}/>
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input ref={(ref) => this.password = ref} value={password} editable={editable} keyboardType='default' returnKeyType='go' autoCapitalize='none' autoCorrect={false} secureTextEntry onChangeText={this.handleChangePassword} underlineColorAndroid='transparent' onSubmitEditing={this.handlePressLogin}/>
            </Item>
          </Form>
          <View style={[Styles.loginRow]}>
            <Button style={{
              backgroundColor: '#29c9db',
              flex: 1,
              justifyContent: 'center'
            }} full onPress={this.handlePressLogin}>
              <NBText>
                Sign In
              </NBText>
            </Button>
            <Button style={{
              backgroundColor: '#29c9db',
              flex: 1,
              justifyContent: 'center'
            }} full onPress={NavigationActions.pop}>
              <NBText>
                Cancel
              </NBText>
            </Button>
          </View>
        </View>

      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {fetching: state.login.fetching}
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
