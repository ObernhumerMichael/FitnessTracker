# FitnessTracker

This is a learning project that has the goals to get more familiar with PHP, Postgres, Angular, Bootstrap, Apexcharts,... .

This project has the following goals:
- [ ] User Registration & Login
- [ ] Workout Tracker
  - [ ] Log exercises: type, duration, calories, notes.
  - [ ] View past workouts.

# Development

Start the project:
```sh
docker compose up -d --build
cd ./frontend
npm install
ng serve
```

Stop the project:
```sh
docker compose down -v
# kill ng serve
```
