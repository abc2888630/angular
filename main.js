"use strict"
require.config({
    baseUrl: './',
    
    paths: {
        'angular': 'js/angular.min',
        'uiRouter': 'js/angular-ui-router.min',
        'jquery': 'js/jquery-2.2.4.min',
        
        // 自定义
        "res": "js/res",
    },
    
    shim: {
        'angular':{exports:'angular'},

        'app': {
            deps: ['angular','res']
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

