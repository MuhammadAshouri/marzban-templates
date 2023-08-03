First you need to copy [html file](https://github.com/MuhammadAshouri/marzban-templates/blob/master/mock-login/index.html) to your sever. You can do it by this:

```bash
mkdir /opt/marzban/home
cd /opt/marzban/home
apt install wget
wget https://cdn.jsdelivr.net/gh/MuhammadAshouri/marzban-templates@master/mock-login/index.html
```

Then you have to map it to your docker container. Add this line to volume section of `docker-compose.yml`:

(DO NOT REPLACE WHOLE FILE, Just the last line)
```docker
services:
    marzban:
        ...
        volumes:
            ...
            - /opt/marzban/home/index.html:/code/app/templates/home/index.html # this line
```

Now you can restart your marzban's docker:
```
marzban restart
```

---

# استفاده

ابتدا فایل [html](https://github.com/MuhammadAshouri/marzban-templates/blob/master/mock-login/index.html) رو به سرور بفرستید. با دستور زیر میتونید این کارو بکنید:

```bash
mkdir /opt/marzban/home
cd /opt/marzban/home
apt install wget
wget https://cdn.jsdelivr.net/gh/MuhammadAshouri/marzban-templates@master/mock-login/index.html
```

حالا باید این فایل به به داکر مپ کنید. خط آخر رو به بخش volumes فایل `docker-compose.yml` اضافه کنید:

(کل فایل رو جایگزین نکنید!!! فقط خط آخر)
```docker
services:
    marzban:
        ...
        volumes:
            ...
            - /opt/marzban/home/index.html:/code/app/templates/home/index.html # this line
```

حالا مرزبان رو ری‌استارت کنید:
```
marzban restart
```
