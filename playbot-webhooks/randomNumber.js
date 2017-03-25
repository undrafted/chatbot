'use strict';

const getRandom = (min, max) => {

	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//arguments: context, callback
module.exports = function(ctx, cb){

	let getResult = getRandom(1,4);
	return ctx.data.replyData == getResult ? cb(null, {
		result: 'You won!',
		resultVal: String(getResult)
	}) : cb(null, {
		result: 'Nopee, you lost!',
		resultVal: String(getResult)
	});

}
