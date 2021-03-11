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

## Quick Start
``` js
const { sc } = require('statushttp');
// Or import { sc } from 'statushttp'; for modules

// Passing case-insensitive text with spaces
console.log(sc('not found').Code); // 404
console.log(sc(201).Desc); // "Created"

// Identifier
console.log(sc(405).Text); // "METHOD_NOT_ALLOWED"
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

## List of Identifiers Used
The following identifiers are used in `statushttp` to identify
various HTTP statuses.

| Identifier                                | Code |
| ------------------------------------------ | --- |
| CONTINUE                                 | 100 |
| SWITCHING_PROTOCOLS                      | 101 |
| PROCESSING                               | 102 |
| EARLY_HINTS                              | 103 |
| OK                                       | 200 |
| CREATED                                  | 201 |
| ACCEPTED                                 | 202 |
| NON_AUTHORITATIVE_INFORMATION            | 203 |
| NO_CONTENT                               | 204 |
| RESET_CONTENT                            | 205 |
| PARTIAL_CONTENT                          | 206 |
| MULTI_STATUS                             | 207 |
| ALREADY_REPORTED                         | 208 |
| IM_USED                                  | 226 |
| MULTIPLE_CHOICES                         | 300 |
| MOVED_PERMANENTLY                        | 301 |
| FOUND                                    | 302 |
| SEE_OTHER                                | 303 |
| NOT_MODIFIED                             | 304 |
| USE_PROXY                                | 305 |
| UNUSED                                   | 306 |
| TEMPORARY_REDIRECT                       | 307 |
| PERMANENT_REDIRECT                       | 308 |
| BAD_REQUEST                              | 400 |
| UNAUTHORIZED                             | 401 |
| PAYMENT_REQUIRED                         | 402 |
| FORBIDDEN                                | 403 |
| NOT_FOUND                                | 404 |
| METHOD_NOT_ALLOWED                       | 405 |
| NOT_ACCEPTABLE                           | 406 |
| PROXY_AUTHENTICATION_REQUIRED            | 407 |
| REQUEST_TIMEOUT                          | 408 |
| CONFLICT                                 | 409 |
| GONE                                     | 410 |
| LENGTH_REQUIRED                          | 411 |
| PRECONDITION_FAILED                      | 412 |
| PAYLOAD_TOO_LARGE                        | 413 |
| URI_TOO_LONG                             | 414 |
| UNSUPPORTED_MEDIA_TYPE                   | 415 |
| RANGE_NOT_SATISFIABLE                    | 416 |
| EXPECTATION_FAILED                       | 417 |
| MISDIRECTED_REQUEST                      | 421 |
| UNPROCESSABLE_ENTITY                     | 422 |
| LOCKED                                   | 423 |
| FAILED_DEPENDENCY                        | 424 |
| TOO_EARLY                                | 425 |
| UPGRADE_REQUIRED                         | 426 |
| PRECONDITION_REQUIRED                    | 428 |
| TOO_MANY_REQUESTS                        | 429 |
| REQUEST_HEADER_FIELDS_TOO_LARGE          | 431 |
| UNAVAILABLE_FOR_LEGAL_REASONS            | 451 |
| INTERNAL_SERVER_ERROR                    | 500 |
| NOT_IMPLEMENTED                          | 501 |
| BAD_GATEWAY                              | 502 |
| SERVICE_UNAVAILABLE                      | 503 |
| GATEWAY_TIMEOUT                          | 504 |
| HTTP_VERSION_NOT_SUPPORTED               | 505 |
| VARIANT_ALSO_NEGOTIATES                  | 506 |
| INSUFFICIENT_STORAGE                     | 507 |
| LOOP_DETECTED                            | 508 |
| NOT_EXTENDED                             | 510 |
| NETWORK_AUTHENTICATION_REQUIRED          | 511 |

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
- `sc`
   : An alias for the `StatusCode` class constructor.

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
let   successStatus = new StatusCode(200);
      successStatus = sc(200); // Using the alias
const createdStatus = sc('created');
const continueStatus = sc('ConTinUe');
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
  	res.status(statusCode.NOT_FOUND).end(statusDesc[statusCode.NOT_FOUND]);
  });
  
  app.listen(5000);
  ```
- A React application:
  ``` jsx
  import react, { useState } from 'react';
  import axios from 'axios';
  import { sc } from 'statushttp';
  
  const App = () => {
    const [resp, setResp] = useState(null);
  
    if (resp == null) {
      axios.get('http://localhost:5000')
        .then(r => setResp(r))
        .catch(e => setResp(e.response));
    }
  
    return <h1>{sc(resp?.status || 200)}</h1>;
  };
  
  export default App;
  ```

## Development
- Clone the Git repository.
  ``` bash
  git clone https://github.com/paramsiddharth/statushttp.git
  ```
- Install the dependencies.
  ``` bash
  cd statushttp
  npm ci
  ```
- Install the development code as a global module.
  ``` bash
  npm i -g .
  ```
- Build the ESM wrapper and the minified form of the development code.
  ``` bash
  npm run build
  ```
- Test the library.
  ``` bash
  npm test
  ```
  Test with your own values.
  ``` bash
  cd tests
  node test 'service unavailable'
  ```
  Test the minified web version by running `tests/Web.html`.

## Contribution
Contributions are welcome via [GitHub](https://github.com/paramsiddharth/statushttp).
- Raise issues via GitHub.
- Fork the repository.
- Clone the fork.
- Setup the development environment as described above.
- Commit and push changes to the forked repository.
- Create a pull request.

# Made with ❤ by [Param](http://www.paramsid.com).
