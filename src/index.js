import {forward} from 'coffea'
import {parse} from 'coffea-irc-parser'
const stream = require('stream')

const defaults = {
  host: 'chat.freenode.net',
  port: 6697,
  ssl: true,
  ssl_allow_invalid: false
}

/**
 * Example configuration passed through to this function:
 *
 * {
 *   "host": "chat.freenode.net",
 *   "port": 6697,
 *   "ssl": true,
 *   "ssl_allow_invalid": false
 * }
 */
export default function irc (config, dispatch) {
  // Merge the configuration with the default configuration, initiate connection.
  Object.assign(config, defaults);
  connection(config, dispatch);

  return forward({
    'message': null // No handler defined for 'message' (yet)
  })
}