# My Next.js 14, Material UI 5, NextAuth.js 4 Web Application
Tinkering around with a generic web application "setup" repo using these "new" frameworks. The current state of this web app has a fully responsive CSS layout and authentication/authorization.
![README_image_02.png](https://github.com/jphillips28/my-next-mui-auth-app/blob/main/README_image_02.png?raw=true)
![README_image_03.png](https://github.com/jphillips28/my-next-mui-auth-app/blob/main/README_image_03.png?raw=true)
![README_image_04.png](https://github.com/jphillips28/my-next-mui-auth-app/blob/main/README_image_04.png?raw=true)

## Prerequisites
- Node Version Manager v0.39.7 (_optional, but highly recommended_)
- Node.js 20.11.1 LTS
- NPM v10.2.4
- Visual Studio Code v1.87.0 (_optional, but highly recommended_)
  - **Run & Debug** (_launch.json_): 
    - Quick `RUN AND DEGUG` Startups
    - ![README_image_01.png](https://github.com/jphillips28/my-next-mui-auth-app/blob/main/README_image_01.png?raw=true)
    - Click on the "Run and Debug" icon within the Visual Studio Code side-bar
    - Select the "Server & Chrome Incognito" launch configuration from the `RUN AND DEBUG` select list
    - Click on the play button next to the `RUN AND DEBUG` select list
      - This will launch two debugging "Call Stacks", one for the Node.js server and one for the Chrome client
      - This will allow for the strategic placement of breakpoints on both _client-side_ code AND _server-side_ code (_eliminating the need for `console.log()` debugging_)
    - If you accidentially close the Chrome client during debugging, you can reattach it by:
      - Selecting the "Chrome" or the "Chrome: Incognito" launch configuration from the `RUN AND DEBUG` select list
      - Clicking on the play button next to the `RUN AND DEBUG` select list
  - **Project Based Settings** (_settings.json_):
    - Organizes `imports` ***on save***

## Getting started
- Open a terminal supporting the above prerequisites
- Clone this repository's default branch to a local directory
- Navigate to the newly cloned local repository
  - I recommend using Visual Studio Code (_it's free!_)
- Copy and rename the `.env.local.sample` file to `.env.local`
  - Configure and populate appropriate `.env.local` values
    - The `NEXTAUTH_URL` can be set to `http://localhost:3000` for local development
    - The `NEXTAUTH_SECRET` can be generated (_using `openssl rand -base64 32` in a termnial_)
    - You'll need to generate the `GITHUB_ID` and `GITHUB_SECRET` values inside your GitHub User Settings
      - Login to [GitHub](https://github.com/) and select `Settings` below your User Icon
      - Select `Developer Settings`
      - Select `OAuth Apps`
      - Click the `New OAuth App` button
        - The `Homepage URL` can be set to `http://localhost:3000` for local development
        - The associated `Authorization callback URL` would be `http://localhost:3000/api/auth/callback/github`
      - Set the `GITHUB_ID` to the generated `Client Id`
      - Set the `GITHUB_SECRET` to the generated `Client Secret` (_caution, you'll only be able to see this value once, but you can easily generate a new one_)
- Run `npm install`
  - I recommend running `npm ci` if you've already _initialized_ project dependencies (_i.e. a `package-lock.json` exists_)
- The supported local `npm run <script>` commands are:
  - `npm run dev` for local development (_refer to prerequisites for `.vscode` debug configurations_)
    - On [http://localhost:3000](http://localhost:3000)
  - `npm run build` for a local production build
  - `npm run start` for a local production app
    - On [http://localhost:3000](http://localhost:3000)
  - `npm run lint` (_TODO: Needs more `.eslint` configuration_)

## Supporting Library Documentation
- [Node.js 20](https://nodejs.org/dist/latest-v20.x/docs/api/)
- [Next.js 14 App Router](https://nextjs.org/docs)
- [Material UI 5](https://mui.com/material-ui/getting-started/)
- [NextAuth.js 4](https://next-auth.js.org/getting-started/introduction)
