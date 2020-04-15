(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{260:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"git命令行相关操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git命令行相关操作"}},[s._v("#")]),s._v(" Git命令行相关操作")]),s._v(" "),e("h2",{attrs:{id:"步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),e("h3",{attrs:{id:"查看-git-项目文件的状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-git-项目文件的状态"}},[s._v("#")]),s._v(" 查看 Git 项目文件的状态")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git status\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("Untracked files 表示未追踪的文件")]),s._v(" "),e("li",[s._v("Changes not staged for commit 表示内容改变需要 git add 加到暂存区")])]),s._v(" "),e("h3",{attrs:{id:"工作区-暂存区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作区-暂存区"}},[s._v("#")]),s._v(" 工作区 暂存区")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git add <filename> / git add .\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"暂存区-当前分支-版本库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#暂存区-当前分支-版本库"}},[s._v("#")]),s._v(" 暂存区 当前分支(版本库)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('$ git commit -m "commit message"\n$ git checkout --<filename>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"撤销"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[s._v("#")]),s._v(" 撤销")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git rm --cached <filename> 仅从暂存区移除，仍保留在工作区中，从跟踪清单删除\n$ git reset HEAD <filename>撤销添加到暂存区\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("--mixed 意思是：不删除工作空间改动代码，撤销 commit，并且撤销 git add . 操作 这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。")]),s._v(" "),e("li",[s._v("--soft 不删除工作空间改动代码，撤销 commit，不撤销 git add .")]),s._v(" "),e("li",[s._v("--hard 删除工作空间改动代码，撤销 commit，撤销 git add .,注意完成这个操作后，就恢复到了上一次的 commit 状态。")])]),s._v(" "),e("h3",{attrs:{id:"推送到远程分支、冲突解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送到远程分支、冲突解决"}},[s._v("#")]),s._v(" 推送到远程分支、冲突解决")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git push remote-name\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"冲突解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#冲突解决"}},[s._v("#")]),s._v(" 冲突解决")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git pull --rebase 保留冲突从远程仓库拉取最新的代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("若是提示信息里没有提示冲突的文件,则继续 git push")]),s._v(" "),e("li",[s._v("若是提示冲突文件,在每个冲突文件中删除“HEAD -----”等冗余字符 保留需要的代码确认无误后,执行以下代码：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git add .\n$ git rebase --continue\n$ git push\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("还有个情况,会删除冲突文件,可以退出 rebasing,再 git pull 拉取代码进行 merge 操作 $ git rebase --abort")])]),s._v(" "),e("h3",{attrs:{id:"代码储存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码储存"}},[s._v("#")]),s._v(" 代码储存")]),s._v(" "),e("p",[s._v("git pull 时若是还有未提交的改变,会提示错误：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-error: cannot pull with rebase: Your index contains uncommitted changes.\n-error: please commit or stash them.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("若有一些不需要传到版本库的文件，可以在 commit 之后，用 stash 命令储存改变，待传完后释放。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git stash 储存在刚提交的分支上(未追踪的文件不会被储存)\n$ git stash apply恢复最新的进度到工作区\n$ git stash list 显示保存进度的列表\n$ git stash apply [stash_id]恢复指定的进度到工作区\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"合并分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),e("h3",{attrs:{id:"合并分支步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并分支步骤"}},[s._v("#")]),s._v(" 合并分支步骤")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git fetch origin (dev 分支)\n$ git checkout master (切换到 master 分支)\n$ git merge --no-ff dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"git-merge-和-git-merge-no-ff-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-merge-和-git-merge-no-ff-区别"}},[s._v("#")]),s._v(" git merge 和 git merge --no-ff 区别")]),s._v(" "),e("ul",[e("li",[s._v("--no-ff 指的是强行关闭 fast-forward 方式。")]),s._v(" "),e("li",[s._v("fast-forward 方式就是当条件允许的时候，git 直接把 HEAD 指针指向合并分支的头，完成合并。属于“快进方式”，不过这种情况如果删除分支，则会丢失分支信息。因为在这个过程中没有创建 commit")]),s._v(" "),e("li",[s._v("git merge --squash 是用来把一些不必要 commit 进行压缩，比如说，你的 feature 在开发的时候写的 commit 很乱，那么我们合并的时候不希望把这些历史 commit 带过来，于是使用--squash 进行合并，此时文件已经同合并后一样了，但不移动 HEAD，不提交。需要进行一次额外的 commit 来“总结”一下，然后完成最终的合并。")])]),s._v(" "),e("p",[s._v("总结：\n--no-ff：不使用 fast-forward 方式合并，保留分支的 commit 历史\n--squash：使用 squash 方式合并，把多次分支 commit 历史压缩为一次")]),s._v(" "),e("h2",{attrs:{id:"其他命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[s._v("#")]),s._v(" 其他命令")]),s._v(" "),e("p",[s._v("查看本地的分支，其中你正打开的分支名会高亮显示，而且前面会有一个*号")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git branch -l\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看本地和远程分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git branch -a\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("创建本地分支gismaster，可以将gismaster换成你想要创建的分支的名字")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git branch gismaster\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将本地分支gismaster推送到远程服务器上，并命名为gis")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git push origin gismaster:gis\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将远程git仓库里的gis分支拉取到本地并命名为gismaster")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git checkout -b gismaster origin/gis\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("删除本地分支gismaster")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git branch -d gismaster\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("删除远程分支gismaster")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git push origin --delete gismaster\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将gismaster分支合并到当前分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git merge gismaster\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("显示远程仓库信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git remote -v\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("推送远程分支")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git push origin master\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("修改远程仓库地址（在已经add了远程仓库地址，使用它进行修改地址）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git remote set-url origin https*.git\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("关联远程库（添加远程仓库地址）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git remote add origin https*.git\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("显示所有提交过的版本信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("利用这个版本记录，可以回退到我们之前提交的任何一次提交过的版本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git log --pretty=oneline\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("信息太多可以加上--pretty=oneline")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git log --oneline --before={3.weeks.ago} --after={2019-04-18} --no-merges\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("某个时间段的提交并且隐藏合并提交")]),s._v(" "),e("p",[s._v("查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git reflog\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("回退到任意一次记录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git reset --hard [log_id]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);