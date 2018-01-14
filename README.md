lofty-gatsby-starter
=====================

### Run It
```
npm run dev
```

### Run Lint
```
npm run lint
npm run lint-fix
```

### Build Production Files
```
npm run build
```

### Serve Production Files
```
npm run prod
```

### DB calls
```
vim creds.json
{
  "host": "localhost",
  "user": "mysql user",
  "password": "mysql password",
  "database": "template"
}

// in mysql
create database template;

mysql -u [user] -p template < /path/to/this/repo/src/api/template.sql
```
