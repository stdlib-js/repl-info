/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var objectKeys = require( '@stdlib/utils-keys' );
var data = require( './../data/data.json' );


// FUNCTIONS //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var keys;
	var i;

	keys = objectKeys( data );
	for ( i = 0; i < keys.length; i++ ) {
		console.log( data[ keys[ i ] ] ); // eslint-disable-line no-console
	}
}


// MAIN //

main();
