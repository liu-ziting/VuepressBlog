# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 发布 npm run deploy
git push -f git@github.com:liu-ziting/Liublog.github.io.git master

cd -