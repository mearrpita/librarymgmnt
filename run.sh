#! bin/sh/

cd client

npm run build

cd ..

git add .

DATE=$(date)

git commit -m "$DATE"

git push