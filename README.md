# Back end
```
O servidor do backend esta no arquivo 'server.js'
O banco de dados e um arquivo json o qual esta no 'db.json'
As depedencias esta no arquivo package.json

permissão para deletar pasta chmod 777 nomepasta

1 - Pasta backend/  npm install
2 - npm start  roda o local host  
3 - npm run start-auth roda a authenticação  
4 - http://localhost:8000
```

# Front end
```
1 - Pasta frontend/  npm install
2 - npm start  roda o local host
3 - http://localhost:3000
```

# REGISTER
```

curl POST http://localhost:8000/auth/register
{
  "username":"Adriano",
  "email": "adriano@gmail.com",
  "password":"123456"
}

```

# SESSIONS
```

curl POST http://localhost:8000/sessions
{
  "email": "adriano@gmail.com",
  "password":"123456"
}

```