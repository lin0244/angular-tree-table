angular.module('myApp')
    .factory('dataSource', function() {
        var dataSource = {};
        dataSource.demo1 = function() {
            return {
                code: 200,
                msg: '成功',
                data: {
                    list: [{
                        name: '杨玺1',
                        age: 18,
                        positionName: '前端开发',
                        leaderName: 'xxx',
                        children:[{
                            name: '杨玺1.1',
                            age: 18,
                            positionName: '前端开发',
                            leaderName: 'xxx',
                        },{
                            name: '杨玺1.2',
                            age: 18,
                            positionName: '前端开发',
                            leaderName: 'xxx',
                        }]
                    }, {
                        name: '海哥',
                        age: 18,
                        positionName: '服务器开发',
                        leaderName: 'xxx'
                    }, {
                        name: '祥仔3',
                        age: 18,
                        positionName: '前端开发',
                        leaderName: 'xxx',
                        children:[{
                            name: '祥仔3.1',
                            age: 18,
                            positionName: '前端开发',
                            leaderName: 'xxx',
                        },{
                            name: '祥仔3.2',
                            age: 18,
                            positionName: '前端开发',
                            leaderName: 'xxx',
                        }]
                    }]
                }
            }
        };
        dataSource.demo3 = function() {
            return {
                code: 200,
                msg: '成功',
                data: {
                    list: [{
                        name: '杨玺',
                        age: 18,
                        sex: 0,
                        positionName: '前端开发',
                        leaderName: 'xxx',
                        income: 100,
                        dateIn: 574790400000
                    }, {
                        name: '海哥',
                        age: 18,
                        sex: 1,
                        positionName: '服务器开发',
                        leaderName: 'xxx',
                        income: 100,
                        dateIn: 574790400000
                    }, {
                        name: '祥仔',
                        age: 18,
                        sex: 1,
                        positionName: '前端开发',
                        leaderName: 'xxx',
                        income: 100,
                        dateIn: 574790400000
                    }]
                }
            }
        }
        dataSource.demo4 = function(_param) {
            if (_param == 1) {
                return {
                    code: 200,
                    msg: '成功',
                    data: {
                        list: [{
                            name: '杨玺',
                            age: 18,
                            sex: 0,
                            positionName: '前端开发',
                            leaderName: 'xxx'
                        }],
                        pages: 3,
                        num: 1,
                        size: 1,
                        total: 3
                    }
                }
            } else if (_param == 2) {
                return {
                    code: 200,
                    msg: '成功',
                    data: {
                        list: [{
                            name: '海哥',
                            age: 18,
                            sex: 1,
                            positionName: '后端开发',
                            leaderName: 'xxx'
                        }],
                        pages: 3,
                        num: 2,
                        size: 1,
                        total: 3
                    }
                }

            } else if (_param == 3) {
                return {
                    code: 200,
                    msg: '成功',
                    data: {
                        list: [{
                            name: '祥仔',
                            age: 18,
                            sex: 1,
                            positionName: '前端开发',
                            leaderName: 'xxx'
                        }],
                        pages: 3,
                        num: 3,
                        size: 1,
                        total: 3
                    }
                }

            }

        }
        return dataSource;
    });
