import React from 'react'
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  Text,
} from 'react-native'
import { UpVote, DownVote } from './components';
import { upVote } from '../../../../features/feed/redux';
import { useDispatch } from 'react-redux';

const POST_MAX_WIDTH = 800
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export function Post({ data }) {
  const {
    breeds,
    id,
    url,
    width,
    height
  } = data

  if (breeds.length < 1) {
    return null
  }

  const dispatch = useDispatch()

  const [dimensions, setDimensions] = React.useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  React.useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  function handleUpVote() {
    dispatch(upVote(id))
  }

  const ratio = height / width;
  const scaledWidth = dimensions.window.width > POST_MAX_WIDTH ? POST_MAX_WIDTH : dimensions.window.width

  return (
    <View key={id} style={styles.container}>
      <Image
        source={url}
        style={{
          width: scaledWidth,
          height: scaledWidth * ratio,
        }}
      />
      {/* <View style={styles.metaContainer}>
        <Text>Name: {breeds[0].name}</Text>
        <Text>Bred group: {breeds[0].breed_group}</Text>
        <Text>Bred for: {breeds[0].bred_for}</Text>
        <Text>Life span: {breeds[0].life_span}</Text>
        <Text>Temperament: {breeds[0].temperament}</Text>
        <Text>Height: {breeds[0].height.metric}cm</Text>
        <Text>Weight: {breeds[0].weight.metric}kg</Text>
      </View> */}
      <View>
        <UpVote onPress={handleUpVote} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 15,
    marginVertical: 20,
    overflow: 'hidden',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    borderColor: 'rgba(0,0,0,0.5)'
  },
  image: {
    height: '100%',
    width: '100%',
  },
  metaContainer: {
    padding: 10
  }
})