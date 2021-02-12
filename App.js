import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PicturePuzzle, PuzzlePieces } from 'react-native-picture-puzzle';


export default function App() {
  const [hidden, setHidden] = React.useState<number | null>(0); // piece to obscure
  const [pieces, setPieces] = React.useState<PuzzlePieces>([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const source = React.useMemo(() => ({
    uri: 'https://pbs.twimg.com/profile_images/1180062941162479616/W8XdhKTG_400x400.jpg',
  }), []);
  const renderLoading = React.useCallback((): JSX.Element => <ActivityIndicator />, []);
  const onChange = React.useCallback((nextPieces: PuzzlePieces, nextHidden: number | null): void => {
    setPieces([...nextPieces]);
    setHidden(nextHidden);
  }, [setPieces, setHidden]);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <PicturePuzzle
      size={500}
      pieces={pieces}
      hidden={hidden}
      onChange={onChange}
      source={source}
      renderLoading={renderLoading}
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
