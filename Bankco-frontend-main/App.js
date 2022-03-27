import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import Startup from "./src/navigations/Startup";
import store from "./src/store";

export default function App() {
  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <Provider store={store}>
          <Startup />
        </Provider>
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}
