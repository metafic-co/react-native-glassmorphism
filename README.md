
![Logo](https://metafic.co/wp-content/uploads/2022/05/Metafic-Logo.svg)


# React Native Glassmorphism

React Native Glassmorphism is a library created to facilitate the use of Glassmorphism design techniques in React Native.

It's a wrapper around @react-native-community/blur to create basic React Native elements to replicate the design methodology of Glassmorphism. 




## Features

- Glassmorphed View
- Glassmorphed TextInput
- Glassmorphed Button using Touchable Opacity

## Installation

1. You can install the library using yarn: 

```bash
  yarn add @metafic-co/react-native-glassmorphism @react-native-community/blur
```
 or npm:

```bash
  npm install @metafic-co/react-native-glassmorphism @react-native-community/blur
```
2. (iOS only) Install native dependencies:

```bash
  cd ios
  pod install
```

3. Include the library in your code:

```js
  import {GlassView, GlassInput, GlassButton} from "@metafic-co/react-native-glassmorphism";
```


## Usage/Examples

```javascript
import {GlassView} from '@metafic-co/react-native-glassmorphism'
import {View, Text} from 'react-native'

function App() {
  return (
    <GlassView>
      <View>
        <Text>I am a text over glass</Text>
      </View>
    </GlassView>
  );
}
```

```javascript
import {GlassButton} from '@metafic-co/react-native-glassmorphism'
import {View, Text} from 'react-native'

function App() {
  return (
    <View>
      <GlassButton onPress={() => {console.log("You pressed on the glass.")}}>
        <Text>I am a text in Glass Button</Text>
      </GlassButton>
    </View>
  );
}
```

```javascript
import {GlassInput} from '@metafic-co/react-native-glassmorphism'
import {View} from 'react-native'
import {useState} from 'react';

function App() {
  const [value, setValue] = useState('');
  return (
    <View>
      <GlassInput value={value} onChangeText={setValue} />
    </View>
  );
}
```


## Screenshots

#### GlassView

![GlassView](https://i.imgur.com/dpLyr3H.png)

#### GlassInput

![GlassInput](https://i.imgur.com/Si0Y0QZ.png)

#### GlassButton

![GlassButton](https://i.imgur.com/iZDMgct.png)


## GlassView Props


| Prop | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `containerStyle` | `ViewStyle` | Style for GlassView Container |
| `glassStyle` | `ViewStyle` | Style for GlassView's Blur Component |
| `ref` | `View` | Reference for GlassView Container |

## GlassInput Props


| Prop | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `value` | `string` | **Required**. Value to be passed in TextInput |
| `onChangeText` | `function: void` | **Required**. Function to handle change in text |
| `containerStyle` | `ViewStyle` | Style for GlassView Container |
| `glassStyle` | `ViewStyle` | Style for GlassView's Blur Component |
| `textInputStyle` | `ViewStyle` | Style for GlassView's TextInput Component |
| `placeholder` | `string` | Placeholder Text |
| `placeholderTextColor` | `string` | Placeholder Text Color |
| `ref` | `TextInput` | Reference for GlassView TextInput |

## GlassButton Props


| Prop | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `onPress` | `function: void` | **Required**. Function to handle button press |
| `containerStyle` | `ViewStyle` | Style for GlassView Container |
| `glassStyle` | `ViewStyle` | Style for GlassView's Blur Component |
| `ref` | `TouchableOpacity` | Reference for GlassView Touchable Component |


## Authors

- [@harshrat](https://www.github.com/harshrat)
- [@raj-kar](https://github.com/raj-kar)


## License

[MIT](https://choosealicense.com/licenses/mit/)

