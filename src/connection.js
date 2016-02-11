import {parse} from 'coffea-irc-parser'
const stream = require('stream')

export default function (config, dispatch, propagate) {
  // Set up the socket connection to the IRC server.
  let net = require(config.ssl ? 'tls' : 'net')
  let connection = net.connect({host: config.host, port: config.port})

  // Set the options to the stream we've set up to the IRC server.
  // Make it send lines to the parser for parsing of IRC messages.
  connection.setEncoding('utf8')
  connection.on('data', onData);
  connection.on('end', onEnd);

  const onData = (data) => {
  	// Send that out to all the sub-modules of coffea-irc
  	let parsed = parse(data);

  	if (parsed instanceof Error) {
  		// TODO: Warn end-user (or developer)
  	}

  	return propagate(parsed);
  }

  const onEnd = () => {
  	// TODO: Disconnect event (core?)
  }
}