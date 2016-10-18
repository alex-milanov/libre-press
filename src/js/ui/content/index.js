'use strict';

const {
	section, h1, h2, h3, hr, header, i, ul, li, a, p,
	table, thead, tbody, tr, td, th
} = require('../../util/vdom');

module.exports = ({state, actions}) => section('.content', [
	p('Hello World!')
]);
