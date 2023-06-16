var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/kittenzexe/hsrtools.kittenzexe.git', // Update to point to your repository
    user: {
      name: 'KittenzExe', // update to use your name
      email: 'kitkittenz123@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);