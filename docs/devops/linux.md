
---
title: linux begin
date: 2021-02-04
categories:
 - devops
tags:
 - linux
---

[服务器安装nodejs nvm](https://cloud.tencent.com/document/product/213/38237)

使用

```shell
https://npm.taobao.org/mirrors/node/latest-v15.x/node-v15.4.0-linux-x64.tar.xz 下载npm
```

[nginx部署](https://yq.aliyun.com/articles/744961)



[docker教程](https://cloud.tencent.com/developer/article/1667550)

dev.to上有很多

精通linux

[docker for frontend](https://dev.to/akanksha_9560/docker-for-frontend-developers-1dk5)



[装win子系统](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package)



```
安装报错
--allowing
```



```
删除docker
rm dockerid
或者强行删除docker目录
rm -rf /var/lib/docker

使用这个命令会破坏docker目录
之后需要在该目录重新生成docker文件，并在里面新建tmp文件夹
https://github.com/moby/moby/issues/19566
```



vim 编辑

esc推出编辑

:wq 保存并退出



[dockerfile下载慢](https://blog.csdn.net/sinat_31465609/article/details/104105123)

```javascript
systemctl restart docker
重启
 不行再设置dns
```

vim i 进入输入模式

esc进入命令模式



cp拷贝文件



docker rm 是删除container的，需要先运行container 再停止container,最后删除

```
docker run -p 4000:80 --name SOMENAME friendlyhello

# container stop
docker container stop SOMENAME

# container removal
docker rm -f SOMENAME
```

docker image rm imageName:tag是删除image的



docker push 需要先新建reposity，再重新设置tag, tag名与dockerhub一致



dockerhub太慢

有http代理解决得办法

https://www.cnblogs.com/36bian/p/12761680.html



我使用ucloud UHub代替

https://docs.ucloud.cn/uhub/guide



注意uhub的tag与dockerhub的tag不一样



dockerhub

```
username/imagename:tag
```

uhub

```
uhub.service.ucloud.cn/{已创建镜像仓库}/{镜像}:tag
```

