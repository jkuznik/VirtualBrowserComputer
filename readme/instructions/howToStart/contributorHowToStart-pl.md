
## Poniższa instrukcja została niemal w całości skopiowana z innego projektu nazwanego <span style="color: purple;"><i>first-cotributions</i></span> dostępnego na GitHub pod  tym [adresem](https://github.com/firstcontributions/first-contributions.git) a oryginał samej instrukcji dostępnty [tutaj](https://github.com/firstcontributions/first-contributions/blob/main/docs/translations/README.pl.md) . Niewielkie zmiany w treści tej instrukcji wynikają z dostosowania jej do projektu w którym jesteś.

## Pierwsze kontrybucje

Zawsze jest ciężko, kiedy robisz coś po raz pierwszy. Szczególnie gdy współpracujesz z innymi ludźmi,
ponieważ popełnianie błędów nie jest niczym przyjemnym. Jednak właśnie na współpracy opiera się idea
otwartego oprogramowania. Chcemy nauczyć w prosty sposób nowych programistów jak wgrać swoją pierwszą
zmianę w obcym projekcie.

Czytanie artykułów i oglądanie poradników może pomóc, ale czy jest coś lepszego niż spróbowanie czegoś
samemu bez obaw, że się coś zepsuje? Ten projekt ma na celu dostarczyć nowicjuszom wskazówek i uprościć
proces wgrania pierwszej zmiany. Pamiętaj: im bardziej jesteś zrelaksowany, tym lepiej się uczysz. Jeśli
chcesz wgrać swoją pierwszą kontrybucję wykonaj kilka prostych kroków poniżej. Będzie fajnie, obiecujemy.

Jeśli nie masz Gita na swoim komputerze, [zainstaluj go](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git) .

## Zrób fork repozytorium (fork)

Zrób fork tego repozytorium klikając przycisk Fork na górze tej strony. Stworzysz tym samym kopię tego 
repozytorium na swoim koncie.

![](https://camo.githubusercontent.com/8547afafbabd1058a0405c82912dcacde6c336ea3789458f31234ee039c282c9/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f666f726b2e706e67)

## Sklonuj repozytorium (clone)

Teraz sklonuj repozytorium na swój komputer. Przejdź do swojego konta GitHub, otwórz skopiowane
repozytorium, kliknij przycisk Code, a później ikonkę skopiuj do schowka. 

![](https://camo.githubusercontent.com/3e9cd41ded21918841c80a920f07055592b899c041a27bbe232824678f2207f0/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f636c6f6e652e706e67)
![](https://camo.githubusercontent.com/1db3f99bfd4b29355003017a64d54ae503071477a720cec75357baa5d6e2460e/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f636f70792d746f2d636c6970626f6172642e706e67)

Otwórz konsolę i uruchom komendę git:

git clone <skopiowany-adres>

Gdzie <skopiowany-adres> to adres tego repozytorium (twojej kopii tego projektu). Zobacz poprzedni krok aby
skopiować adres.

Przykład:

git clone git@github.com:jkuznik/virtual-computer.git

## Stwórz gałąź (branch)

Wejdź do folderu ze swoim repozytorium (jeżeli jeszcze tam nie jesteś):

cd first-contributions

Teraz utwórz nową gałąź wykonując polecenie git switch:

git switch -c <nazwa-zmian>

Przykład:

git switch -c add-mario-CLI-game

## Wprowadź zmiany i wgraj je

Przykładem Twoich zmian może być dodanie własnego programu lub gry typu CLI, jak to zrobić zobacz [tutaj](../inAppPrograms/inAppInterfaces-pl.md) .

Następnie zapisz te zmiany wykonując komendę git commit:

git commit -m "<treść-commita>"

Przykład: 

git commit -m "Add mario game"

## Wyślij zmiany na GitHub

Wyślij swoje zmiany komendą git push:

git push -u origin <nazwa-Twojego-brancha>

Zastąp <nazwa-Twojego-brancha> nazwą gałęzi, którą wcześniej utworzyłeś.

## Wyślij swoje zmiany do zatwierdzenia

W swoim repozytorium na GitHubie znajdziesz przycisk Compare & pull request. Kliknij go.

![](https://camo.githubusercontent.com/e10bdcf31fb3f8ce863dc1dbf9269a23bce9263afcbe9a62d892e9b6e78df1c6/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f636f6d706172652d616e642d70756c6c2e706e67)

Teraz wyślij prośbę o scalenie.

![](https://camo.githubusercontent.com/34a2cf737ba2f5943e3e469aa231e95a0ee4d0888c10dcaa169c1f8413d43333/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f7375626d69742d70756c6c2d726571756573742e706e67)

Niedługo dodamy proponowane przez ciebie zmiany do głównej gałęzi projektu. Zostaniesz powiadomiony mailowo kiedy zmiany zostaną scalone.

## Co dalej?

Brawo! Właśnie ukończyłeś standardowy workflow fork -> clone -> edit -> pull request, który często będziesz napotykać jako współtwórca!

Świętuj swoją pierwszą zmianę i podziel się nią z przyjaciółmi.

Możesz dołączyć na nasz serwer discord w przypadku kiedy będziesz potrzebował pomocy albo miał jakieś pytania.

Serwer discorda: https://discord.gg/PPscZ7QE