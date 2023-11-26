import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {Button, View} from 'react-native';

function Info({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Info'>;
}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Info;
