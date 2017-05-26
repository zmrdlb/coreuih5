/**
 * @fileoverview 所有页面全局js
 * @version 1.0 | 2016-05-22 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * */

/**
 * requirejs配置
 */

requirejs.config({
    baseUrl: '../js',
    paths: {
        'text': 'widget/lib/require.text',
        'css': 'widget/lib/require-css/css',

        'zepto': 'widget/lib/zepto-1.1.6.min',
        'fastclick': 'widget/lib/fastclick',
        'libio': 'widget/io',
        'libjson': 'widget/util/json',
        'libchannel': 'widget/util/channel',
        'liblayers': 'widget/ui/layer',
        'libinherit': 'widget/util/inherit',
        'libevt': 'widget/util/evt',
        'libdom': 'widget/util/dom',
        'libcompatible': 'widget/util/compatible',
        'libload': 'widget/util/load',
        'libbase': 'widget/util/base',
        'libstr': 'widget/util/str',
        'libclassdesign': 'widget/util/classdesign',
        'libtpl': 'widget/util/tpl',
        'libpage': 'widget/ui/page',
        'libtab': 'widget/ui/tab',
        'libform': 'widget/ui/form',

        //当前业务公共组件库路径

        'COREUI': 'ui',
        'CORECOMMON': 'common'
    }
});

define('$',['zepto'],function(){
    return Zepto;
});

/**
 * fastclick绑定
 */
requirejs(['fastclick'],function(FastClick){
    if(window._nobindFastclick != true){ //默认绑定fastclick
        window._fastclickobj = FastClick.attach(document.body);
    }
});
