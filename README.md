# Back end
```
O servidor do backend esta no https://github.com/eduardofpu/jwt-token-kotlin

```

# Front end
```
Para deletar pasta com permissão: para deletar pasta chmod 777 nomepasta

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

# Login
```

curl POST http://localhost:8000/login
{
  "email": "admin@admin.com",
  "password":"admin"
}

```