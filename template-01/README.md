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

(DO NOT REPLACE WHOLE FILE, Just the last line)
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

You can change default settings from settings variable in index.html, [here](https://github.com/MuhammadAshouri/marzban-templates/blob/3328559ea73e5a884fa0a619332ab1a040221395/template-01/dist/index.html#L183C15-L183C15) line 183

You can also change tutorial from appsJson variable in index.html, [here](https://github.com/MuhammadAshouri/marzban-templates/blob/3328559ea73e5a884fa0a619332ab1a040221395/template-01/dist/index.html#L112C14-L112C14) line 112

For tutorial video, you need to set direct link of video to tutorial of json

To change logo you can change src in line 212

---

# استفاده

ابتدا فایل [html](https://github.com/MuhammadAshouri/marzban-templates/blob/master/template-01/dist/index.html) رو به سرور بفرستید. با دستور زیر میتونید این کارو بکنید:

```bash
cd /opt/marzban
apt install wget
wget https://cdn.jsdelivr.net/gh/MuhammadAshouri/marzban-templates@master/template-01/dist/index.html
```

حالا باید این فایل به به داکر مپ کنید. خط آخر رو به بخش volumes فایل `docker-compose.yml` اضافه کنید:

(کل فایل رو جایگزین نکنید!!! فقط خط آخر)
```docker
services:
    marzban:
        ...
        volumes:
            ...
            - /opt/marzban/index.html:/code/app/templates/subscription/index.html # this line
```

حالا مرزبان رو ری‌استارت کنید:
```
marzban restart
```

# ویرایش

تنظیمات پیش فرض رو از خط 183 فایل تغییر دهید: [اینجا](https://github.com/MuhammadAshouri/marzban-templates/blob/3328559ea73e5a884fa0a619332ab1a040221395/template-01/dist/index.html#L183C15-L183C15)

لیست نرم افزارها رو هم از خط 112 تغییر بدید: [اینجا](https://github.com/MuhammadAshouri/marzban-templates/blob/3328559ea73e5a884fa0a619332ab1a040221395/template-01/dist/index.html#L112C14-L112C14)

برای آموزش هم آدرس direct یک ویدیو رو برای هر نرم افزار توی tutorial بذارید.

برای تغییر لوگو هم خط 212 رو ادیت کنید
