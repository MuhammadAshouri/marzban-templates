First you need to copy [html file](https://github.com/MuhammadAshouri/marzban-templates/blob/master/mock-login/index.html) to your sever. You can do it by this:

```bash
mkdir /opt/marzban/home
cd /opt/marzban/home
apt install wget
wget https://cdn.jsdelivr.net/gh/MuhammadAshouri/marzban-templates@master/mock-login/index.html
```

Then you have to edit home page variable in `.env` file:

(Remove # in the begining of the line)
```env
HOME_PAGE_TEMPLATE="/opt/marzban/home/index.html"
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

حالا باید مقدار متغیر صفحه خانه را در فایل `.env` قرار دهید:

(حتما # اول خط را بردارید)
```env
HOME_PAGE_TEMPLATE="/opt/marzban/home/index.html"
```

حالا مرزبان رو ری‌استارت کنید:
```
marzban restart
```
