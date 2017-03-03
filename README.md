# gmonitor

### 安装js的编译环境，并启动自动编译脚本
```
cd /gmonitor/src/main/webapp/resources/js/gmonitor
$npm install
$npm start
```
### 安装SpringMVC工程环境，并启动tomcat7
```
cd /gmonitor
$mvn install -Dmaven.test.skip=true
$mvn tomcat7:run
```
