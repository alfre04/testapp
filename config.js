define( function ( require ) {

	"use strict";

	return {
		app_slug : 'android',
		wp_ws_url : 'http://warroom2018.com/wp-appkit-api/android',
		wp_url : 'http://warroom2018.com',
		theme : 'wpak-theme-bootstrap-feature-user-login',
		version : '2.0.0',
		app_title : 'WR2018',
		app_platform : 'android',
		gmt_offset : -6,
		debug_mode : 'off',
		auth_key : 'put your unique phrase here',
		options : {"refresh_interval":0,"googleanalytics":{"trackingid":"UA-114534744-1","track_errors":"1"},"pushwoosh":{"pwid":"442BA-1D782","googleid":"557553698794"}},
		theme_settings : [],
		addons : [{"name":"Google Analytics for WP-AppKit","slug":"wpak-addon-googleanalytics","url":"http:\/\/warroom2018.com\/wp-content\/plugins\/wpak-addon-google-analytics","js_files":[{"file":"js\/wpak-googleanalytics.js","type":"module","position":""},{"file":"js\/wpak-googleanalytics-app.js","type":"init","position":"before"}],"css_files":[],"html_files":[],"template_files":[],"app_data":null},{"name":"Pushwoosh for WP-AppKit","slug":"wpak-addon-pushwoosh","url":"http:\/\/warroom2018.com\/wp-content\/plugins\/wpak-addon-pushwoosh","js_files":[{"file":"js\/wpak-pushwoosh.js","type":"module","position":""},{"file":"js\/wpak-pushwoosh-app.js","type":"init","position":"before"}],"css_files":[],"html_files":[],"template_files":[],"app_data":null}]
	};

});
