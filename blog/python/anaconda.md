# 安装

> 如果喜欢大而全就 [anaconda](https://www.anaconda.com/download/#macos) ,精简就 [miniconda](https://docs.conda.io/en/latest/miniconda.html)

- 我此处安装的是 `miniconda`

- 推荐下载`.pkg`的比较省事儿，不要下载 `.sh`，个人建议

## 常用命令

1. 验证安装成功
  ```bash
  conda -V
  ```

  终端上将会以 `conda` 版本号 的形式显示当前安装conda的版本号。如： `conda 4.7.12`

2. 更新conda至最新版本
  ```bash
  conda update conda
  ```

  当较新的版本可以用于升级时，终端会显示 `Proceed ([y]/n)?` ，此时输入 y 即可进行升级。


3. 卸载

  ① Linux 或 macOS
  ```bash
  rm -rf ~/anaconda2
  ```
  或
  ```bash
  rm -rf ~/anaconda3
  ```
  或
  ```bash
  rm -rf ~/miniconda3
  ```

  ② Windows

  > 控制面板卸载

4. 环境

    1. 创建
      ```bash
      conda create -n <env-name> [python=3.7] <pkg-name>
      ```

      -  `env-name` 即创建的环境名。建议以英文命名，且不加空格，名称两边不加尖括号

      -  `pkg-names` 即安装在环境中的包名。名称两边不加尖括号

      -  `[python=3.7]` 可以指定环境的python版本(可选)

    2. 使用

      ① Linux 或 macOS
      ```bash
      source activate env-name
      ```

      ② Windows
      ```bash
      activate env-name
      ```

      - 如果创建环境后安装Python时没有指定Python的版本，那么将会安装与Anaconda版本相同的Python版本，即如果安装Anaconda第2版，则会自动安装Python 2.x；如果安装Anaconda第3版，则会自动安装Python 3.x。

      - 当成功切换环境之后，在该行行首将以“(env_name)”或“[env_name]”开头。其中，“env_name”为切换到的环境名。如：在macOS系统中执行 source active python2 ，即切换至名为“python2”的环境，则行首将会以(python2)开头。

    3. 退出

      ① Linux 或 macOS
      ```bash
      source deactivate
      ```

      ② Windows
      ```bash
      deactivate
      ```

    4. 查看所有环境

      ```bash
      conda env list
      ```
      > just like this

        - base                  *  //miniconda3
        - conda-learn              //miniconda3/envs/conda-learn

    5. 复制环境
      ```bash
      conda create -n <new-env> --clone <old-env>
      ```

      > `conda create --name py2 --clone python2`

        即为克隆名为“python2”的环境，克隆后的新环境名为“py2”。此时，环境中将同时存在“python2”和“py2”环境，且两个环境的配置相同。

    6. 删除环境
      ```bash
      conda remove -n <env-name> --all
      ```


    7. 包管理

      - 查找

        ```bash
        conda search <pkg-name>
        ```

      - 查看
        ```bash
        conda list
        ```

        > 执行上述命令后将在终端显示当前环境已安装包的包名及其版本号。

      - 安装包

        ① 在指定环境中安装包
        ```bash
        conda install -n <env-name> <pkg-name>
        ```

        ② 在当前环境中安装包
        ```bash
        conda install <pkg-name>
        ```

        - pip

          > 你也可以使用pip来安装包

          - tips

            1. pip只是包管理器，无法对环境进行管理。因此如果想在指定环境中使用pip进行安装包，则需要先切换到指定环境中，再使用pip命令安装包。

            2. pip无法更新python，因为pip并不将python视为包。

            3. pip可以安装一些conda无法安装的包；conda也可以安装一些pip无法安装的包。因此当使用一种命令无法安装包时，可以尝试用另一种命令。

      - 卸载包
        ```bash
        conda remove -n <env-name> <pkg-name> # 卸载指定环境中的包
        # or
        conda remove <pkg-name> # 卸载当前环境中的包
        ```

      - 更新包

        ```bash
        conda update --all # 更新所有包
        conda update <pkg-name> # 更新指定包
        ```
        