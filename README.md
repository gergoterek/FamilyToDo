# FamilyToDo

Feladat:
Olyan webes alkalmazás elkészítése, amellyel bejelentezett felhasználóként olyan feladatokat vihetünk fel, ami alapján számon tudjuk tartani az elvégzendő feladatokat, a feladatot felvevő és elvégező személy nevével együtt. Szülői(admin) joggal változtathatjuk a közreműködőket és azok jogosultságát.



Funkcionális követelmények:
- Felhasználóként szeretnék felvinni egy feladatot, hogy a többiek meg tudják csinálni --> Feladat felvétele
- Felhasználóként szeretnék visszajelzést kapni, hogy a feladat milyen státuszban van. --> Feladatok listázása
- Felhasználóként szeretnék megjegyzést fűzni egy feladathoz vagy módosítani azután is, hogy felvettem. --> Feladatok history.
- Felhasználóként szeretnék egy feladattáblához hozzáfűzni, illetve státuszát elvégzettként megjelölni
- Adminisztrátorként szeretném látni a felhasználók jogosultságát és módosítani azt.
- A felhasználók és adminok bejelentkezés után használhatják a funkciókat. Ezeket egy előre megadott listából, vagy LDAP - authentikációval kell elvégezni.
- A főoldalon az authentikáció után a feladattáblák találhatóak a képernyőn.


Nem funkcionális követelmények:
- Felhasználóbarát, ergonomikus elrendezés és kinézet.
- Gyors működés.
- Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.

Szerepkörök:

- felhasználó: a vendég szerepkörén túl hibát tud bejelenteni, és saját bejelentett hibáit megtekinteni.
- admin: a felhasználó szerepkörén túl a jogosultságok módosítását tudja elvégezni, új embert felvenni.



Csapat:
- Lacza Péter(Neptun kód: LRRVU8)
- Terék Gergő(Neptun kód: SDNMSG)
