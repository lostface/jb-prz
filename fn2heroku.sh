rm Procfile
rm package.json
cd frontend
npm run build
cd ..
cp heroku/Procfile_fn ./Procfile
cp frontend/package.json .
git add Procfile package.json frontend/build/ -f
git commit -m "Setup deploy of frontend to Heroku"
git push herokufn master -f
git reset head^1
