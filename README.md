# Editor.js embed tesztelés

Lényeges fájlok:
- test.html: a különböző social médiák beépített embed funkcióit teszteltem benne. Tiktoknál és Instagramnál külön meg kellett keresnem, hogy hogyan lehet iframe-ben embedelni, mert az oldal alap embed linkje nem iframe-mel van
- src/Editor.js: az Editor komponens, itt kísérleteztem ki, hogy hogyan működik az embed. A támogatott social médiákat csak bele kell tenni a beállításokba, ami viszont nem támogatott, arra írni kell egy regexet, hogy milyen formátumban várjuk a linket, ki kell szedni regex grouppal az id-t, majd megadni az embed-elésre használt url-t, végül magának az iframe-nek a html kódját.

Maga a szerkesztőben nincs külön videó blokk, hanem ha bemásoljuk valamelyik támogatott oldal linkjét, akkor azt egyből videóként beágyazva jeleníti meg.