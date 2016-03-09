'use strict';
angular.module('myApp.demo1', ['ngRoute'])
    .controller('TableDemo1Ctrl', function($scope, dataSource) {
        var ctrl = this;
        var demo1 = {
            init: function() {
                this.treeTableConfig();
            },
            treeTableConfig: function(){
                ctrl.colnames = [{
                    name: "名字",
                    value: "name"
                }, {
                    name: "年龄",
                    value: "age"
                }, {
                    name: "岗位",
                    value: "positionName"
                }, {
                    name: "主管",
                    value: "leaderName"
                }];
                ctrl.contents = dataSource.demo1().data.list;
            }
        };
        demo1.init();
    });
