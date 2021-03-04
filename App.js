import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

const App = () => {
  const {width, height} = useWindowDimensions();

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View
            style={{
              width,
              height,
              paddingHorizontal: 100,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>
                Try this on an iPad. Press the text input to focus and bring up
                the keyboard then press anywhere to dismiss the keyboard. If you
                have a "normal" keyboard. It will work as expected. You will se
                the red block under the keyboard. But if you are using a
                floating keyboard (long press on the keyboard button bottom
                right and select floating), when the keyboard is dismissed. The
                whole first view disappears and only the one below is shown
              </Text>
              <TextInput
                style={{
                  marginTop: 20,
                  width: 100,
                  height: 20,
                  borderWidth: 1,
                }}
              />
            </View>
          </View>
          <View
            style={[
              {
                width,
                height,
                backgroundColor: 'red',
                alignItems: 'center',
              },
            ]}>
            <Text>This is exactly below the first screen</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default App;
