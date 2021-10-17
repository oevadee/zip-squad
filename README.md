# ZIP Squad app

---

**Please clone _master_ repo!**
: _production_ includes merging commits that we don't want in _master_

---

## Branches

### General info

There are 2 core branches:

| _master_ | _production_ |
| -------- | ------------ |
| dev      | deploy       |

Each of them is protected which means that direct git push is **FORBIDDEN !**
The only way to push any changes to those branches is via **PULL REQUEST !**

### Naming convention

Every branch (other than core) should be created of following parts:

1. **TASK ID** - **lower case** prefix with related github issue id e.g. "zip-420", followed by "/" char.
2. **GROUP WORD** - one of (feature, bugfix, hotfix) followed by "/" char.
3. (Optional) **SCOPE** - one of (infra, backend, frontend, marketing) followed by "/" char, can be added whenever changes in branch will be related to single root directory.
4. **SHORT DESCRIPTION** - precise and informative info in `kebab-case` about code changes in branch
   e.g. "add-navigation-module".

Example branch names:

```
zip-54/feature/backend/add-expense-mutation
zip-21/bugfix/frontend/fix-sorting-logic
zip-4/feature/add-cd-for-production
```

## Pull requests

### General info

Every PR should pass github actions check.

### _master_

**Always** create from _feature_ branch

#### Naming convention

1. **BRANCH NAME** - same as _feature_ branch name, but all "/" chars must be swapped for " " (space char). **task id** will be sepparated automatically by github, **leave it like that !**

Example pull requests from _feature_ branch to _master_:

```
zip 54 feature backend add-expense-mutation
zip 21 bugfix frontend fix-sorting-logic
zip 4 feature add-cd-for-production
```

### _production_

**Always** create from _master_ branch

#### Naming convention

1. **Phrase** - destination eg: "to-prod/", followed by "/" char.

2. **Date** - release date eg: "release-YYYY-mm-dd".

3. (Optional) **Number** - number of release in that day eg: "#3"

Example pull request of second release in that day from _master_ to _production_:

```
to-prod/release-2021-09-10#2
to-prod/release-2021-10-15
```

---

## Working on...

~~**Deployment**~~
