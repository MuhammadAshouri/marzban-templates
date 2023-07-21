<p align="center">
  <a href="https://github.com/MuhammadAshouri/marzban-templates" target="_blank" rel="noopener noreferrer" >
    <img src="https://github.com/MuhammadAshouri/marzban-templates/raw/master/template-01/preview.png" alt="SubPage screenshots" width="600" height="auto">
  </a>
</p>

# Usage

First you need to copy [html file](https://github.com/MuhammadAshouri/marzban-templates/blob/master/template-01/dist/index.html) to your sever. You can do it by this:

```bash
cd /opt/marzban
apt install wget
wget https://cdn.jsdelivr.net/gh/MuhammadAshouri/marzban-templates@master/template-01/dist/index.html
```

Then you have to map it to your docker container. Add this line to volumn section of `docker-compose.yml`:
```docker
services:
    marzban:
        ...
        volumns:
            ...
            - /opt/marzban/index.html:/code/app/templates/subscription/index.html # this line
```

Now you can restart your marzban's docker:
```
marzban restart
```
