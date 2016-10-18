'use strict';

const Rx = require('rx');
const $ = Rx.Observable;
const {Subject} = Rx;

// const marked = require('marked');
// const moment = require('moment');
// require('moment/locale/bg');

const request = require('../util/request');

const stream = new Subject();

const init = () => stream.onNext(state => state);

const initial = {
	articles: []
};

module.exports = {
	stream,
	init,
	initial
};
