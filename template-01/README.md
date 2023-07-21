<p align="center">
  <a href="https://github.com/MuhammadAshouri/marzban-templates" target="_blank" rel="noopener noreferrer" >
    <img src="https://github.com/MuhammadAshouri/marzban-templates/blob/dca23a0ecbee84839686a1b928a2dc7e8aba4089/template-01/screenshot.jpg" alt="SubPage screenshots" width="800" height="auto">
  </a>
</p>

# Usage

First you need to copy [html file](https://github.com/MuhammadAshouri/marzban-templates/blob/master/template-01/dist/index.html) to your sever. You can do it by this:

```bash
cd /opt/marzban
apt install wget
wget https://cdn.jsdelivr.net/gh/MuhammadAshouri/marzban-templates@master/template-01/dist/index.html
```

Then you have to map it to your docker container. Add this line to volume section of `docker-compose.yml`:
```docker
services:
    marzban:
        ...
        volumes:
            ...
            - /opt/marzban/index.html:/code/app/templates/subscription/index.html # this line
```

Now you can restart your marzban's docker:
```
marzban restart
```

# Edit

You can change default settings from settings variable in index.html, [here](https://github.com/MuhammadAshouri/marzban-templates/blob/153d1f00c29c7ac9c5d1bbc2403a0dd6cfafc9b8/template-01/dist/index.html#L171C16-L171C16)

You can also change tutorial from appsJson variable in index.html, [here](https://github.com/MuhammadAshouri/marzban-templates/blob/153d1f00c29c7ac9c5d1bbc2403a0dd6cfafc9b8/template-01/dist/index.html#L24C25-L24C25)

For tutorial video, you need to set direct link of video to tutorial of json
