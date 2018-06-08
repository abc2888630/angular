"use strict"
require.config({
    baseUrl: './',
    
    paths: {
        'angular': 'js/angular.min',
        'uiRouter': 'js/angular-ui-router.min',
        'ocLazyLoad': 'js/ocLazyLoad.min',
        'jquery': 'js/jquery-2.2.4.min',
        'simditorModule':'site/assets/scripts/module',
        'hotkeys':'site/assets/scripts/hotkeys',
        'simditor': 'site/assets/scripts/simditor',
        'uploader': 'site/assets/scripts/uploader',
        // 自定义
        "res": "js/res",
    },
    
    shim: {
        'angular':{exports:'angular'},

        'app': {
            deps: ['angular','res']
        },
        'simditor': {
            deps: ['simditorModule', 'hotkeys']
        }
    },
    map: {
        '*': {
            'css': 'js/requirejs-css.min.js'
        }
    },
    deps: ['bootstrap'],//要先加载bootstrap.js文件
    waitSeconds:  0 ,//超时时间 设为0即持续等待
    urlArgs: "bust=" + (new Date()).getTime()//防止读取缓存，调试用
});

