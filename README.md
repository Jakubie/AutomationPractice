# Automation Practice
This project has been done to present a way to automate log in / sign in scenarios.
The used site used for this purpose is http://automationpractice.com - therefore internet connection is needed while executing tests. 

**Requirements (and where applicable - versions on which correct working is confirmed):**
1. Java Runtime Environment (Version 8 Update 201) - to start selenium standalone service
2. [Node.js](https://nodejs.org) (v. 10.15.3)
3. [NPM](https://npmjs.org) (v. 6.4.1)
4. Chrome browser (v. 72.0.3626.121 ; 64bit)
5. Internet connection to download dependencies and execute tests

**Project set up:**
1. Clone project to selected location in one of following ways:
    - open command line interpreter, navigate to selected folder and enter:
 
        `git clone https://github.com/Jakubie/AutomationPractice.git`
    - download project zip and extract it there

2. Open command line interpreter, move to project root folder and enter: `npm install` (this will install project dependencies)

    Example: `C:\Users\<user>\Desktop\AutomationPractice>npm install`.

**Running tests:**
1. Execute tests by opening command line interpreter, moving to project root folder and entering: 
`npm run test`

    Example: `C:\Users\<user>\Desktop\AutomationPractice>npm run test`.

    After the tests are completed, report would be generated. A sign that operation is done is seeing following status:
`Report successfully generated to allure-report`.

2. Open report by entering: `npm open-report`.
This will start local server enabling viewing the report - it should be opened automatically.

**Additional notes:**
1. Tests are being executed on Chrome browser as to present automation of couple simple cases.
To extend project sot that they would be executed on other browsers (for example Firefox), add following to `wdio.conf.js` file, as an element of `capabilities` array:
    ```
    {
      maxInstances: 1,
      browserName: 'firefox'
    }
    ```

    Be sure to have the browser installed.

2. Tests can also be run by command `npm run test-login`. In `wdio.conf.js` file, login related tests have been added to a dedicated suite.
Project can be extended to have other tests divided into additional suites (once those test cases are added).

3. `npm run test`, `npm run test-login`, `npm run open-report` are custom scripts defined in `package.json` file:
    ```
      "scripts": {
        "test": "wdio wdio.conf.js & allure generate --clean",
        "test-login": "wdio wdio.conf.js --suite login & allure generate --clean",
        "open-report": "allure open"
      }
    ```
    They shorten the effort needed to run the tests. After adding another suites, it would be appropriate to add respective scripts to run tests in similar manner. 

4. In case when one of tests fails, screenshot is captured and added to generated report.