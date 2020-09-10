import React from 'react'
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native'
import { ThumbsUp, MetricText } from './components';
import { markAsFavorite } from '../../../../features/feed/redux';
import { useDispatch } from 'react-redux';
import { metrics } from '../../../../../constants';

const POST_MAX_WIDTH = 600
const window = Dimensions.get("window");

export function Post({ data }) {
  const {
    breeds,
    id,
    url,
    width,
    height,
    vote,
  } = data

  if (breeds.length < 1) {
    return null
  }

  const dispatch = useDispatch()

  function handleUpVote() {
    const value = !!vote ? 0 : 1
    dispatch(markAsFavorite(id, value))
  }

  console.log("I'm rendering!")

  const ratio = height / width;
  let scaledWidth = window.width > POST_MAX_WIDTH ? POST_MAX_WIDTH : window.width
  scaledWidth -= metrics.defaultPadding

  return (
    <View key={id} style={styles.container}>
      <Image
        source={url}
        style={{
          width: scaledWidth,
          height: scaledWidth * ratio,
        }}
      />
      <View style={styles.metaContainer}>
        <MetricText title="Name" subtitle={breeds[0].name} />
        <MetricText title="Bred group" subtitle={breeds[0].breed_group} />
        <MetricText title="Bred for" subtitle={breeds[0].bred_for} />
        <MetricText title="Life span" subtitle={breeds[0].life_span} />
        <MetricText title="Temperament" subtitle={breeds[0].temperament} />
        <MetricText title="Height" subtitle={`${breeds[0].height.metric}cm`} />
        <MetricText title="Weight" subtitle={`${breeds[0].weight.metric}kg`} />
        <ThumbsUp active={!!vote} onPress={handleUpVote} />
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
  metaContainer: {
    padding: metrics.defaultPadding
  }
})