---
title: docker配置
date: 2021-02-04
categories:
 - devops
tags:
 - docker
---

[docker1](https://cloud.tencent.com/developer/article/1667550)

[docker2](https://cloud.tencent.com/developer/article/1667553)

[docker3](https://cloud.tencent.com/developer/article/1667555)

[docker4](https://cloud.tencent.com/developer/article/1667560)

[docker5](https://cloud.tencent.com/developer/article/1667562)

[docker6](https://cloud.tencent.com/developer/article/1667563)

[docker7](https://cloud.tencent.com/developer/article/1667564)

[docker8](https://cloud.tencent.com/developer/article/1667565)

[docker9](https://cloud.tencent.com/developer/article/1667566)

[docker11](https://cloud.tencent.com/developer/article/1667568)

[docker12](https://cloud.tencent.com/developer/article/1667569)

[docker13](https://cloud.tencent.com/developer/article/1667571)

```shell
docker run --name nginx \
-p 80:80 -p 443:443 \
--mount type=bind,src=/usr/local/src/nginx/conf.d/default.conf,dst=/etc/nginx/conf.d/default.conf \
--mount type=bind,src=/usr/local/src/nginx/conf/nginx.conf,dst=/etc/nginx/nginx.conf \
--mount type=bind,src=/usr/local/src/nginx/cert,dst=/usr/local/src/nginx/cert \
--mount type=bind,src=/usr/local/src/pre/home,dst=/usr/local/src/pre/home \
--mount type=bind,src=/usr/local/src/pre/blog,dst=/usr/local/src/pre/blog \
--mount type=bind,src=/usr/local/src/pre/note,dst=/usr/local/src/pre/note \
--mount type=bind,src=/usr/local/src/pre/box,dst=/usr/local/src/pre/box \
--mount type=bind,src=/usr/local/src/nginx/log,dst=/var/log \
-d nginx

```

