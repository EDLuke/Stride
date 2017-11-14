const Adapter = require('enzyme-adapter-react-16');
const Enzyme = require('enzyme');

Enzyme.configure({ adapter: new Adapter() });

/* replace the following with jest-preset.json under jest-expo */

/*
{
  "haste": {
    "defaultPlatform": "ios",
    "platforms": [
      "android",
      "ios",
      "native"
    ],
    "providesModuleNodeModules": [
      "react-native"
    ]
  },
  "moduleNameMapper": {
    "^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$": "RelativeImageStub",
    "^React$": "<rootDir>/node_modules/react",
    "^[./a-zA-Z0-9$_-]+\\.(ttf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$": "RelativeImageStub"
  },
  "modulePathIgnorePatterns": [
    "<rootDir>/node_modules/react-native/Libraries/react-native/"
  ],
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|native-base))"
  ],
  "setupFiles": [
    "<rootDir>/node_modules/react-native/jest/setup.js",
    "<rootDir>/node_modules/jest-expo/src/setup.js"
  ],
  "testEnvironment": "node"
}
*/