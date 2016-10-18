'use strict';

const {
	section, h1, h2, h3, hr, header, i, ul, li, a,
	table, thead, tbody, tr, td, th
} = require('../../util/vdom');

module.exports = ({state, actions}) => header([
	h1('Libre Press')
]);
