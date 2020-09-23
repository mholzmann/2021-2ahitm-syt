# Git

## Commit Messages

Wir haben folgende 'commit messages' vereinbart:

- 'Work on task 1': Aufgabe 1 wurde bearbeitet, ist aber noch nicht fertiggestellt
- 'Complete task 1': Aufgabe 1 wurde fertiggestellt
- 'Fix bug in task 1': In der (zuvor bereits fertiggestellten) Aufgabe 1 wurde ein Fehler behoben.

**Wichtig:** Die Aufgaben müssen in der vorgegebenen Reihenfolge fertiggestellt werden!

## How to modify the latest commit message

Mit dem folgendem Kommando kann die letzte 'commit message' überschrieben werden:

```bash
 git commit --amend -m "your new message"
```

Falls bereits gepushedX wurde, ist anschließend der folgende Aufruf notwendig:

```bash
git push --force origin master
```
