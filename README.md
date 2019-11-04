# FamilyToDo

Feladat:
Olyan webes alkalmazás elkészítése, amellyel bejelentezett felhasználóként olyan feladatokat vihetünk fel, ami alapján számon tudjuk tartani az elvégzendő feladatokat, illetve újakat vehetünk fel és törölhetünk ki. Szülői(admin) joggal változtathatjuk a közreműködőket és azok jogosultságát.



Funkcionális követelmények:
- Felhasználóként szeretnék felvinni egy feladatot, hogy a többiek meg tudják csinálni --> Feladat felvétele
- Felhasználóként szeretnék visszajelzést kapni, hogy a feladat milyen státuszban van. --> Feladatok listázása
- Felhasználóként szeretnék egy feladaton módosítani azután is, hogy felvettem. --> Feladatok módosítása.
- Felhasználóként szeretnék egy feladattáblához hozzáfűzni, illetve státuszát elvégzettként megjelölni
- Felhasználóként szeretnék csatlakozni a családi csoporthoz.
- Adminisztrátorként szeretném látni a felhasználók jogosultságát és módosítani azt.
- A felhasználók és adminok bejelentkezés után használhatják a funkciókat. Ezeket egy előre megadott listából, vagy LDAP - authentikációval kell elvégezni.
- A főoldalon az authentikáció után a feladattáblák találhatóak a képernyőn.


Nem funkcionális követelmények:
- Felhasználóbarát, ergonomikus elrendezés és kinézet.
- Gyors működés.
- Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.

Szerepkörök:

- vendég: látja a bejelentkezési képernyőt, tud regisztrálni.
- felhasználó: Látja a családjához tartozó táblákat és a feladatokat
- admin: a felhasználó szerepkörén túl a jogosultságok módosítását tudja elvégezni, új embert meghívni.




Csapat:
- Lacza Péter(Neptun kód: LRRVU8)
- Terék Gergő(Neptun kód: SDNMSG)
