# Portfolio:
My website is published at:
https://piotrwr.github.io/portfolio/

## Menu:
* [About this project](#about-this-project)
* [Technologies](#technologies)
* [Setup](#setup)
* [Contact](#contact)

##about-this-project
This is my portfolio. I would like to show you this project.
It is made to be business card. You can see here information about me, technologies which I use, my other projects, information to contact with me.
Project is responsive and is made in BEM methodologie. 
It is made 'mobile first' (start from: 320x568).
It's some part of me. 

## Technologies:
1. HTML 5
2. CSS 3
3. SCSS (SASS)
4. JavaScript
5. jQuery (v3.3.1)
6. BEM
7. GIT

CSS is made in BEM technology.

## Setup:

##### /index.html
-it is main html. Here there are imported css/style.css , js/script.js, library of jQuery.

##### css/...
In this catalog is generated file style.css and style.css.map by SASS generator. It is made from files in /sass.

##### js/...
Here is script.js which imports other js files from this catalog.
In future I will make this code shorter and better then today's.
- script.js imports other files js. It is main file (HTML is calling this file). 
- variables.js has variables
- buttons.js has code about 'footer button', we can see him in landscape and min-width=1000px view.
- navPage.js has code, which it is used to navigation on this page after click on link (a href). In the future I am going to make shorter code then today's.
- parallax.js are making parallax effect of intro picture (person picture). 
- stickyNavBar.js is code about burger in upper bar and open menu (after click on this burger)

##### sass/..
Here is style.scss which imports other js files (module.scss) from this catalog.
Every catalog have module.scss.
Every module.scss contains only @import to files .scss or modules in catalog above. 
We have 4 main catalogs, It is base, modal-wrap, sticky-wrap, wrapper.
Style.scss imports module.scss from this catalogs and allWraps.scss.

##### lib/...
Now it is nothing here.

##### toDownload/...
Files to download.

##### img/..
Here you are images.

##### workSpace/..
Here you are free space for not using in project things.

+++++++++++++++++++++

## Contact:
https://github.com/PiotrWR
pwrynio@gmail.com
+48 518 308 508

++++++++++
