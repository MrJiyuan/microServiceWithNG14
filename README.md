# MicroServiceParent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.
## (child)目录下进行一次编译

ng build --project=microServiceChild --configuration production --output-hashing=none --single-bundle
编译过后可以看到dist目录下的main.js，将这个文件载入到任意网页就能直接运行ng应用

## （parent）app.modules中引入并import，然后添加schemas，注意需要从@angular/core引入

## （parent）编译

ng build --project=microServiceParent --configuration production --output-hashing=none
## 把child的主进程main.js和兼容性文件polyfill.js复制到parent目录下
注意main.js更名时需要与tag的名字相同！！！我这里是micro-service-child，

## 这里使用轻量级server进行测试
npm install lite-server -g

## 启动项目
lite-server
