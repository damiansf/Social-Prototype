import React, {Component} from 'react';
import {TextInput, View, Text, Button} from 'react-native';

const users = {};

users['Kevin'] = 'Facebook:, Snapchat:, Twitter:';
users['Damian'] = 'Facebook:, Snapchat:';

export default class Search extends Component {
  state = {query: '', result: ''};

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({query: text})}>
          {' '}
        </TextInput>
        <Button
          title="search"
          onPress={() => {
            this.setState({result: users[this.state.query]});

            alert(users[this.state.query]);
          }}></Button>
        <Text>{this.state.result}</Text>
      </View>
    );
  }
}
