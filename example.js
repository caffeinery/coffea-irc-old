import connect, { message } from 'coffea'
import irc from './src/index'

const networks = connect([
	{
		protocol: irc,
		host: 'chat.freenode.net',
		post: 6697,
		ssl: true
	}
])

networks.on('event', e => console.log(e))