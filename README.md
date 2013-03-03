Simplest possible hello world heroku node.js app that uses middleware and uses cookies to save something useful

- Here is the github repo : https://github.com/ogt/helloworld-node-cookies
- Here is the heroku app : http://obscure-bastion-8852.herokuapp.com/  (20+ sec delay at first fetch)
- Here is the blog post about this : http://otdump.blogspot.com/2013/03/worknotes-helloworld-with-cookies.html

To run locally or on heroku follow the instructions at https://github.com/ogt/helloworld-js-heroku/blob/master/README.md
with the following changes 

```
> # to run locally
> repo=helloworld-node-cookies
...
> cat >.env_dev 
PORT=5000
HOST=http://localhost:5000
^D
> foreman start -e .env_dev -f Procfile_dev
...
```
