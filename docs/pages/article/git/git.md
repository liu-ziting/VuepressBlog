# Git命令行相关操作

## 步骤

### 查看 Git 项目文件的状态

```
$ git status
```

* Untracked files 表示未追踪的文件
* Changes not staged for commit 表示内容改变需要 git add 加到暂存区

### 工作区 暂存区
```
$ git add <filename> / git add .
```
### 暂存区 当前分支(版本库)
```
$ git commit -m "commit message"
$ git checkout --<filename>
```

### 撤销
```
$ git rm --cached <filename> 仅从暂存区移除，仍保留在工作区中，从跟踪清单删除
$ git reset HEAD <filename>撤销添加到暂存区
```

* --mixed 意思是：不删除工作空间改动代码，撤销 commit，并且撤销 git add . 操作 这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。
* --soft 不删除工作空间改动代码，撤销 commit，不撤销 git add .
* --hard 删除工作空间改动代码，撤销 commit，撤销 git add .,注意完成这个操作后，就恢复到了上一次的 commit 状态。

### 推送到远程分支、冲突解决
```
$ git push remote-name
```

### 冲突解决
```
$ git pull --rebase 保留冲突从远程仓库拉取最新的代码
```

* 若是提示信息里没有提示冲突的文件,则继续 git push
* 若是提示冲突文件,在每个冲突文件中删除“HEAD -----”等冗余字符 保留需要的代码确认无误后,执行以下代码：
```
$ git add .
$ git rebase --continue
$ git push
```
* 还有个情况,会删除冲突文件,可以退出 rebasing,再 git pull 拉取代码进行 merge 操作 $ git rebase --abort

### 代码储存

git pull 时若是还有未提交的改变,会提示错误：

```
-error: cannot pull with rebase: Your index contains uncommitted changes.
-error: please commit or stash them.
```

若有一些不需要传到版本库的文件，可以在 commit 之后，用 stash 命令储存改变，待传完后释放。

```
$ git stash 储存在刚提交的分支上(未追踪的文件不会被储存)
$ git stash apply恢复最新的进度到工作区
$ git stash list 显示保存进度的列表
$ git stash apply [stash_id]恢复指定的进度到工作区
```
## 合并分支

### 合并分支步骤
```
$ git fetch origin (dev 分支)
$ git checkout master (切换到 master 分支)
$ git merge --no-ff dev
```

### git merge 和 git merge --no-ff 区别

* --no-ff 指的是强行关闭 fast-forward 方式。
* fast-forward 方式就是当条件允许的时候，git 直接把 HEAD 指针指向合并分支的头，完成合并。属于“快进方式”，不过这种情况如果删除分支，则会丢失分支信息。因为在这个过程中没有创建 commit
* git merge --squash 是用来把一些不必要 commit 进行压缩，比如说，你的 feature 在开发的时候写的 commit 很乱，那么我们合并的时候不希望把这些历史 commit 带过来，于是使用--squash 进行合并，此时文件已经同合并后一样了，但不移动 HEAD，不提交。需要进行一次额外的 commit 来“总结”一下，然后完成最终的合并。

总结：
--no-ff：不使用 fast-forward 方式合并，保留分支的 commit 历史
--squash：使用 squash 方式合并，把多次分支 commit 历史压缩为一次

## 其他命令

查看本地的分支，其中你正打开的分支名会高亮显示，而且前面会有一个*号
```
git branch -l	
```

查看本地和远程分支
```
git branch -a	
```
创建本地分支gismaster，可以将gismaster换成你想要创建的分支的名字

```
git branch gismaster	
```

将本地分支gismaster推送到远程服务器上，并命名为gis
```
git push origin gismaster:gis	
```

将远程git仓库里的gis分支拉取到本地并命名为gismaster
```
git checkout -b gismaster origin/gis
```

删除本地分支gismaster

```
git branch -d gismaster	
```

删除远程分支gismaster

```
git push origin --delete gismaster	
```
将gismaster分支合并到当前分支

```
git merge gismaster
```

显示远程仓库信息

```
git remote -v	
```

推送远程分支
```
git push origin master	
```

修改远程仓库地址（在已经add了远程仓库地址，使用它进行修改地址）
```
git remote set-url origin https*.git	
```

关联远程库（添加远程仓库地址）
```
git remote add origin https*.git	
```

显示所有提交过的版本信息
```
$ git log
```
利用这个版本记录，可以回退到我们之前提交的任何一次提交过的版本
```
$ git log --pretty=oneline
```
信息太多可以加上--pretty=oneline
```
$ git log --oneline --before={3.weeks.ago} --after={2019-04-18} --no-merges
```
某个时间段的提交并且隐藏合并提交

查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）
```
$ git reflog
```
回退到任意一次记录
```
$ git reset --hard [log_id]
```