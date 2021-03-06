/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = ReactNative;

class RootViewSizeFlexibilityExampleApp extends React.Component {
  state: any;

  constructor(props: {toggled: boolean}) {
    super(props);
    this.state = { toggled: false };
  }

  _onPressButton() {
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    const viewStyle = this.state.toggled ? styles.bigContainer : styles.smallContainer;

    return (
      <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <View style={viewStyle}>
          <View style={styles.center}>
            <Text style={styles.whiteText}>
              React Native Button
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    height: 60,
    backgroundColor: 'gray',
  },
  smallContainer: {
    flex: 1,
    height: 40,
    backgroundColor: 'gray',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  }
});

module.exports = RootViewSizeFlexibilityExampleApp;
