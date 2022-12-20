import React from "react";
import Text from './TextStuff/Text.js'
import Image from './Image/Image.js'
import Buttons from './Buttons/Buttons';
import { StateProvider } from './AppContext';
import Logo from './logo/Logo';
import AppWrap from "./AppWrapper.js";

const App = () => {
  return(
  <div>
    <StateProvider>
    <Logo/>
    <AppWrap>
      <Image/>
      <Buttons/>
      <Text/>
    </AppWrap>
    </StateProvider>
  </div>
  )
}
export default App