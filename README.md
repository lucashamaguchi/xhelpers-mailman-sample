# API - Mailman

## Description

API - Stack:

- [Node.js](https://nodejs.org/).
- [TypeScript](https://www.typescriptlang.org/).
- [Sendgrid](https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail).
- [Xhelpers-api 2.+](https://www.npmjs.com/package/xhelpers-api).
- [Docker](https://www.docker.com/).

## State

|            |           |
| ---------- | --------- |
| Develop    | [pending] |
| Homolog    | [pending] |
| Production | [pending] |

## Installation

```bash
$ npm install
# windowsenv
$ npm install -g cross-env
```

## Configuration

API configuration on .env file.

DEVS: Create .env file on root folder.

```bash
# server params
HOST=localhost
PORT=4000
SSL=false
MAILMAN_APP_KEY=fa85a8ea-9a47-11ea-bb37-0242ac130002

# sendgrid
FROM=contato@...
SENDGRID_API_KEY=SG.....

# sendgrid templates
TEMPLATE_ID_CONFIRM_EMAIL=d-...
TEMPLATE_ID_FORGOT_PASSWORD=d-...
```

## Running the app

```bash
# build tsc
$ npm run build

# development
$ npm run dev

# production
$ npm run start
```

#### Routes

```code
Starting Xhelpers Hapi server API
Settings API: Mongoose disabled;
Settings API: Sequelize disabled;
Settings API: SSL disabled;
Settings API: AppKey enabled;
Settings API: JWT disabled;
Settings API: SSO disabled;
====================================================================================================
🆙  Server api    : http://localhost:4000/
🆙  Server doc    : http://localhost:4000/documentation
🆙  Server status : http://localhost:4000/status
====================================================================================================
Routing table:
        🔎  get -       /documentation
        🔎  get -       /health
        🔎  get -       /status
        🔎  get -       /swagger.json
        📄  post - 🔑   /api/mails
====================================================================================================
```

## AWS

```
$ Pending
```

## Test

[Pending]

## Support

[Pending]
