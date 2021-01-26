# HTTP Status Codes (`statushttp`)
A JavaScript library for working with HTTP status codes.

All status codes are taken from the [IANA Status Code Registry](https://www.iana.org/assignments/http-status-codes).

The library works both in the front-end (VanillaJS) and the back-end (NodeJS), supporting a variety of imports. It can also be used as a command-line tool to work with HTTP status codes.

## Installation
Install it via NPM.
``` bash
# Local
npm i statushttp

# Global
npm i -g statushttp
```

## Importing
- CommonJS
  ``` js
  const { statusCode, statusText, ... } = require('statushttp');
  ```
- ES6
  ``` mjs
  import { statusCode, statusText, ... } from 'statushttp';
  ```
- AMD (require.js)
  ``` js
  require(['main.js'], () => {
    // Assuming path for 'statushttp' configured at 'node_modules/statushttp/statushttp' inside main.js
  	require(['statushttp'], ({
  		statusCode,
  		statusText,
  		...
  	}) => {
  		...
  	});
  });
  ```
- HTML + VanillaJS
  ``` html
  <!-- Minified -->
  <script src='node_modules/statushttp/statushttp.min.js'></script>

  <!-- Not minified -->
  <script src='node_modules/statushttp/statushttp.js'></script>

  <script>
		// statusText, statusCode, et cetera, are accessible now.
  </script>
  ```

## Usage (JavaScript)
The following objects are accessible from `statushttp`:
- `statusCode`
   : Textual identifiers mapped to numeric codes.
- `statusText`
   : Numeric codes mapped to textual identifiers.
- `statusDesc`
   : User-friendly status messages/descriptions.
- `statusClass`
   : Enumerations for status classes.
- `StatusCode`
   : A class implementation for status codes to provide ease in working with status codes.

Examples:
``` js
console.log(statusCode.NOT_FOUND); // 404
console.log(statusText[502]); // BAD_GATEWAY
console.log(statusDesc[301]); // Moved Permanently
console.log(statusClass.SUCCESS); // 2
```

### The `StatusCode` class
The `StatusCode` class provides functionality to facilitate working with HTTP status codes.

The class itself is inherited from `String`, and behaves as a user-friendly message string by default.

#### Constructor
The constructor receives one parameter, which may be a number representing the status code, or the status text (case-insensitive, with or without the hyphens and parentheses).

Examples:
``` js
const successStatus = new StatusCode(200);
const createdStatus = new StatusCode('created');
const continueStatus = new StatusCode('ConTinUe');
```

#### Object Properties
- `Code` : The numerical code for the status.
- `Text` : A textual identifier for the status.
- `Desc` : A user-friendly status message.
- `Class` : The status class enumeration for the status (can be matched from `statusClass` properties).

Examples:
- ``` js
  console.log(successStatus.Text); // OK

  console.log(createdStatus); // Created
  console.log(createdStatus.Code); // 201

  console.log(continueStatus.Desc); // Continue
  console.log(continueStatus.Class); // 1
  ```

## Usage (Command-Line)
`statushttp` can directly be used from the command-line if installed globally. Alterntively, in a project-specific installation, it may be executed using `npx`.

``` bash
statushttp <value> [options] # Global installation
npx statushttp <value> [options] # Local installation
```

The `value` here may be a number representing the status code, or the status text (case-insensitive, with or without the hyphens and parentheses).

Even if `value` contains spaces, it doesn't need to be sent as one parameter enclosed in quotes.

Options:
| Option | Description |
| --- | --- |
| `-l`, `--list` | Show all status codes. |
| `-?`, `--help` | Show help. |
| `-v`, `--version` | Displays the version. |

Examples:
``` bash
> statushttp ok

Status Code: 200
Textual Identifier: OK
Message: OK
Class: SUCCESS

> statushttp 304

Status Code: 304
Textual Identifier: NOT_MODIFIED
Message: Not Modified
Class: REDIRECTIONAL

> statushttp temporary redirect

Status Code: 307
Textual Identifier: TEMPORARY_REDIRECT
Message: Temporary Redirect
Class: REDIRECTIONAL

> statushttp 'not found'

Status Code: 404
Textual Identifier: NOT_FOUND
Message: Not Found
Class: CLIENT_ERROR

> statushttp --list

┌──────┬─────────────────────────────────┐
│ Code │ Message                         │
├──────┼─────────────────────────────────┤
│ 100  │ Continue                        │
├──────┼─────────────────────────────────┤
│ 101  │ Switching Protocols             │
├──────┼─────────────────────────────────┤
│ ...  │ ...                             │
├──────┼─────────────────────────────────┤
│ 510  │ Not Extended                    │
├──────┼─────────────────────────────────┤
│ 511  │ Network Authentication Required │
└──────┴─────────────────────────────────┘
```

## Examples
- An Express server:
  ``` js
  const express = require('express');
  const cors = require('cors');
  const { statusCode, statusDesc } = require('statushttp');
  
  const app = express();
  
  app.use(cors());
  
  app.route('/*')
  .all((req, res) => {
  	res.status(statusCode.NOT_FOUND).end(statusDesc[statusCode.  NOT_FOUND]);
  });
  
  app.listen(5000);
  ```
- A React application:
  ``` jsx
  import react, { useState } from 'react';
  import axios from 'axios';
  import { StatusCode } from 'statushttp';
  
  const App = () => {
    const [resp, setResp] = useState(null);
  
    if (resp == null) {
      axios.get('http://localhost:5000')
        .then(r => setResp(r))
        .catch(e => setResp(e.response));
    }
  
    return <h1>{new StatusCode(resp?.status || 200)}</h1>;
  };
  
  export default App;
  ```

# Made with ❤ by [Param](http://www.paramsid.com).
