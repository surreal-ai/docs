---
title: API Token
---

# API Token

## Request for API Token

After register as a developer, you will get an account with username and password.

For now, developers can get API Token easily by call account login API

```
POST /v1/auth/account.login
```

### Request

```json
{
    "username": "cooluser",
    "password": "YipohBe7quoohuev"
}
```

### Response

```json
{
  "code": 0,
  "data": {
    "access_token": "c5379419-44bb-44ed-a898-8b8d533f2b95",
    "refresh_token": "e65529a4-9c16-4d48-b6d3-94e7f7413d62",
    "expired_at": "2022-03-04T15:09:17.717477068+08:00"
  },
  "message": "success"
}

```

### Examples

:::: tabs    cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab cURL
<<< @/docs/reference/snippets/curl/auth/account-login.sh
:::

::: tab Python
<<< @/docs/reference/snippets/python/auth/account_login.py
:::

::: tab Golang
<<< @/docs/reference/snippets/golang/auth/account_login.go
:::

::: tab Javascript
<<< @/docs/reference/snippets/javascript/auth/account_login.js
:::

::: tab Java
<<< @/docs/reference/snippets/java/auth/account_login.java
:::

::::

