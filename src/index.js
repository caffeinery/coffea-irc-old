import {forward} from 'coffea'
import {parse} from 'coffea-irc-parser'

import {defaults} from './constants'

export default function irc(config, dispatch) {
  const send = event => {
    return;
  }

  const connect = (config) => {
    Object.assign(config, defaults);
    return require(config.ssl ? 'tls' : 'net').connect({host: config.host, port: config.port})
  }

  let connection = connect(config)

  const onData = (data) => {
    let parsed = parse(data)

    if (!data instanceof Error) {
      return propagate(parsed_message(parsed));
    }

    // TODO: Warn the user.
  }
  
  connection.setEncoding('utf8')
  connection.on('message', onData)
  // TODO: Make the core be aware of this disconnection.
  // connection.on('end', onEnd)

  return forward({}) // Nothing to see here, yet.
}