import React, { useEffect, useState } from 'react';
import { SafeAreaView, Button, Text } from 'react-native';
import { WebView } from 'react-native-webview';


const App = () => {
  const [showWebView, setShowWebView] = useState(false);

  const renderWebView = () => {
    return (
      <WebView
        source={{ uri: 'https://www.google.com' }}
        style={{ marginTop: 20 }}
      />
    )
  }

  if (showWebView) {
    return (
      <WebView
        source={{ uri: 'https://www.google.com' }}
        style={{ marginTop: 20 }}
      />
    )
  } else {
    return (
      <SafeAreaView>
        <Button
          title="Open Website"
          onPress={() => setShowWebView(!showWebView)}
        />
        <Text>Working {showWebView.toString()}</Text>
      </SafeAreaView>
    )
  }

}

export default App
