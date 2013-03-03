Simplest possible hello world heroku node.js app that uses middleware and uses cookies to save something useful

- Here is the github repo : https://github.com/ogt/helloworld-node-cookies
- Here is the heroku app : http://obscure-bastion-8852.herokuapp.com/  (20+ sec delay at first fetch)
- Here is the blog post about this : http://otdump.blogspot.com/2013/03/worknotes-helloworld-with-cookies.html

Run locally as
```
> # install github hub, heroku toolbelt
> hub fork ogt/helloworld-node-cookies
> hub clone helloworld-node-cookies
> cd helloworld-node-cookies
> cat >.env_dev 
PORT=5000
HOST=http://localhost:5000
^D
> foreman start -e .env_dev -f Procfile_dev
> open http://localhost:5000
```
Run on heroku as

```
> # assume in helloworld-node-cookies folder, local changes commited, have heroku login/toolbelt
> heroku login
> heroku create helloworld-node-cookies
> git push heroku master
> heroku open
```
