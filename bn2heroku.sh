rm Procfile
rm package.json
cp heroku/Procfile_bn ./Procfile
cp backend/package.json .
git add Procfile package.json -f
git commit -m "Setup deploy of backend to Heroku"
git push herokubn master -f
git reset head^1
