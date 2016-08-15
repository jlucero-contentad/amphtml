/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {writeScript, checkData} from '../3p/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function contentad(global, data) {
	checkData(data, ['id', 'd', 'wid', 'url']);
	/*eslint "google-camelcase/google-camelcase": 0*/
	global.id = data.id;
	global.d = data.d;
	global.wid = data.wid;
	global.url = data.url;
	
	/* Create div to contain ad */
	cad_div = document.createElement('div');
	cad_div.id = "contentad" + global.wid;
	document.body.appendChild(cad_div);
	
	/* Call Content.ad Widget */
	writeScript(global, 'https://api.content.ad/Scripts/widget2.aspx?id='+encodeURIComponent(global.id)+'&d='+encodeURIComponent(global.d)+'&wid='+global.wid+'&url='+encodeURIComponent(global.url)+'&cb='+(new Date()).getTime());
}
