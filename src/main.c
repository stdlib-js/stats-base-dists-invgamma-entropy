/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/invgamma/entropy.h"
#include "stdlib/math/base/special/digamma.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/ln.h"

/**
* Returns the differential entropy of an inverse gamma distribution.
*
* @param alpha    shape parameter
* @param beta     rate parameter
* @return         entropy
*
* @example
* double y = stdlib_base_dists_invgamma_entropy( 1.0, 1.0 );
* // returns ~2.154
*/
double stdlib_base_dists_invgamma_entropy( const double alpha, const double beta ) {
	double out;
	if ( alpha <= 0.0 || beta <= 0.0 ) {
		return 0.0/0.0; // NaN
	}
	out = alpha + stdlib_base_ln( beta * stdlib_base_gamma( alpha ) );
	out -= ( 1.0 + alpha ) * stdlib_base_digamma( alpha );
	return out;
}
