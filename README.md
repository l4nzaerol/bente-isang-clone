composer install (likodd)
npm install (harapp)
npm install axios (harapp)

lipat niyo yung .env sa loob ng file na likodd

pang directory:
cd \my-project\harapp
cd \my-project\likodd


mag command sa likod if ayaw lumabas ng data sa database

pagtapos niyo ilipat yung .env save niyo tapos php migrate na agad
php artisan migrate
php artisan db:seed --class=TaskSeeder
php artisan serve

tapos lipat kayo directory ng frontend
npm start
