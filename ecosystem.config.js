// ecosystem.config.js

module.exports = {
    apps: [
      {
        name: 'nextjs-app',
        cwd: './search',  // Path to Next.js app folder
        script: 'node_modules/next/dist/bin/next',
        args: 'start -p 4200',
      },
      {
        name: 'nodejs-app',
        cwd: './server',    // Path to Node.js app folder
        script: 'index.js',              
      },
    ],
  };
  