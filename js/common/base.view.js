/**
 * @fileoverview 页面基本view类。最终业务项目中落地页的js都必须引用此js或其子类
 * @version 1.0 | 2016-12-20 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
define(['COREUI/ui.alert','COREUI/ui.confirm','COREUI/ui.toast','COREUI/ui.loading','libstr/getUrlArgs'],
function(Alert,Confirm,Toast,Loading,GetUrlArgs){

    function BaseView(){
        this.name = 'zmrdlb';
        //绑定一些常用的组件到全局变量
        window._APP = {};
        _APP.Alert = Alert;
        _APP.Confirm = Confirm;
        _APP.Toast = Toast;
        _APP.Loading = Loading;
        _APP.GetUrlArgs = GetUrlArgs;
    }

    BaseView.prototype.init = function(){
        this._init();
    };

    /**
     * 注册一个页面
     * @param  {Object} opt 里面配置的所有方法都派生给BaseView的实例
     * {
     *      _init: 此方法必须有，页面初始化执行
     * }
     * @return {instance of BaseView}     [description]
     */
    BaseView.register = function(opt){
        var t = new BaseView();
        for(var key in opt){
            t[key] = opt[key];
        }

        //初始化
        t.init();

        return t;
    };

    return BaseView;
});
