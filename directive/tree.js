angular.module('myApp')
    .directive('tableTree', function() {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: "directive/tree.block.html",
            transclude: true,
            controllerAs: 'ctrl',
            scope: {
                colnames: "=colnames",
                contents: "=contents",
                // options: "=options",
                // optionsctrl: "=optionsctrl",
                // css: "=css"
            },
            controller: function($scope, $rootScope) {
                var ctrl = this;
                var table = {
                    //初始化数据对象
                    init: function() {
                        ctrl.colnames = $scope.colnames; //列名
                        ctrl.contents = $scope.contents; //列名
                        ctrl.css = this.cssCtrl($scope.css); //样式
                    },
                    //默认表格样式
                    initCss: function() {
                        return {
                            table: 'table table-striped table-bordered text-sm table-hover',
                            thead: '',
                            theadTr: '',
                            theadTh: '',
                            tbody: '',
                            tbodyTr: '',
                            tbodyTd: ''
                        };
                    },
                    /*
                     * 样式控制函数
                     * @_css 外部传进来的样式字符串
                     */
                    cssCtrl: function(_css) {
                        if (_css == '' || _css == undefined) {
                            return this.initCss();
                        } else {
                            var ownCss = this.initCss();
                            for (var i in _css) {
                                if (_css[i] !== '') {
                                    ownCss[i] = _css[i];
                                }
                            }
                            return ownCss;
                        }
                    }
                };
                table.init();
            }
        };
    });
