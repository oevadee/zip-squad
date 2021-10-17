# ZIP Squad app

## Branches

### General info

There are 2 core branches:

- master (dev)
- prod

Each of them is protected which means that direct git push is **FORBIDDEN!**.
The only way to push any changes to those branches is via pull request.

### Naming convention

Every branch (other than core) should be created of following parts:

1. GROUP WORD - one of (feature, bugfix, hotfix) followed by "/" char.
2. Optional SCOPE - one of (infra, backend, frontend, marketing) followed by "/" char,
   can be added whenever changes in branch will be related to single root directory.
3. TASK ID - related github issue id e.g. "ZIP-420", followed by "-" char.
4. SHORT DESCRIPTION - precise and informative info in `kebab-case` about code changes in branch
   e.g. "add-navigation-module".

Example branch names:

```
feature/backend/ZIP-54-add-expense-mutation
bugfix/frontend/ZIP-21-fix-sorting-logic
feature/ZIP-4-add-cd-for-production
```

### prod PR branch

Before creating PR to/from prod branch, you need to create a branch which name follows the naming rules described below and use it as a source.

#### prod

name should start with "to-prod/" phrase, followed by:

- "release-YYYY-mm-dd#X" when source branch is master

## Pull requests

### General info

Every PR should pass github actions check.

### Naming convention

Pull request names should be the same as source branch name, also whenever name includes "SHORT DESCRIPTION" part then its hyphen "-" chars should be replaced with space " " chars.

Example - second release of the day from master to stage:

- Branch out from master to "to-prod/release-2021-09-10#2"
- Create PR from "to-prod/release-2021-09-10#2"

---

#### Working on...

### Deployments

#### prod

Tagging a commit in production branch will trigger production environment deployment.
Tag name should include version specified in lerna "v1.2.1"
