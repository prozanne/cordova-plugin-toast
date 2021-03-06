/*
 * Copyright 2015 Samsung Electronics Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var exec = require('cordova/exec'),
    MediaPlugin = require('cordova-plugin-toast.MediaPlugin'),
    SEF = require('cordova/plugin/SEF');

function MediaPluginUHD () {
    var TVPlugin = SEF.get('TV');
    var panelResolution = JSON.parse(TVPlugin.Execute('GetPanelResolution'));
    if(Number(panelResolution.vertical) >= 2160){
        MediaPlugin.apply(this, arguments);
        this.name = 'MediaPluginUHD';
    }
    else {
        throw new Error('This device\'s screen is not suitable for UHD Contents playback.');
    }
}

MediaPluginUHD.prototype = new MediaPlugin();

MediaPluginUHD.prototype.onAttachToMedia = function (media) {
	media.registerHook('afterplay', function (media, args) {
		exec(null, null, 'toast.Media', 'setStreamingProperty', [
			'SetUHDResolution',true
		]);
	});
};

module.exports = MediaPluginUHD;
