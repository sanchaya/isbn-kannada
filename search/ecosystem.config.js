module.exports = {
  apps : [{
    name: 'nextjs-app', // Name of your Next.js application
    script: 'node_modules/next/dist/bin/next', // Path to the Next.js CLI script
    args: 'start' 
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
