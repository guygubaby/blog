# 服务器被挖矿入侵

## trace进程占满cpu

### 我服务器有一个 `trace` 进程，占了`98%cpu`,后来发现在`/home`下面有一个trace的可执行文件，kill掉进程后，过了2个小时又出来了

解决办法(临时)：

```bash
cd /home && touch trace trace.tgz && chattr +i trace trace.tgz
```