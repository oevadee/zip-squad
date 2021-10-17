# ZIP Squad app

---

**Please clone _master_ repo!**
: _production_ includes merging commits that we don't want in _master_

---

## Branches

### General info

There are 2 core branches:

| master | production |
| ------ | ---------- |
| dev    | deploy     |

Each of them is protected which means that direct git push is **FORBIDDEN!**.
The only way to push any changes to those branches is via **pull request**.

### Naming convention

Every branch (other than core) should be created of following parts:

1. **TASK ID** - related github issue id e.g. "ZIP-420", followed by "/" char.
2. **GROUP WORD** - one of (feature, bugfix, hotfix) followed by "/" char.
3. (Optional) **SCOPE** - one of (infra, backend, frontend, marketing) followed by "/" char, can be added whenever changes in branch will be related to single root directory.
4. **SHORT DESCRIPTION** - precise and informative info in `kebab-case` about code changes in branch
   e.g. "add-navigation-module".

Example branch names:

```
ZIP-54/feature/backend/add-expense-mutation
ZIP-21/bugfix/frontend/fix-sorting-logic
ZIP-4/feature/add-cd-for-production
```

## Pull requests

### General info

Every PR should pass github actions check.

**Always** create from _master_ branch

### Naming convention

#### production

1. **Phrase** - destination eg: "to-prod/", followed by "/" char.

2. **Date** - release date eg: "release-YYYY-mm-dd", followed by "#" char.

3. (Optional) **Number** - number of release in that day eg: "3"

Example pull request of second release in that day from _master_ to _production_:

```
"to-prod/release-2021-09-10#2"
```

---

#### Working on...

---

~~### Deployment
Tagging a commit in production branch will trigger production environment deployment.
Tag name should include version specified in lerna "v1.2.1"~~
