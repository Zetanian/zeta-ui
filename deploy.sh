rm -rf /home/vimal/zetanium/assets /home/vimal/zetanium/index.html /home/vimal/zetanium/*.svg
cp -r frontend/dist/* /home/vimal/zetanium/

cd /home/vimal/zetanium/
git add .
if [ -z "$1" ]; then
  echo "Error: Commit message required as argument."
  exit 1
fi
git commit -m "$1"
git push