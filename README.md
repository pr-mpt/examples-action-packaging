# Example Action

**Example Action** is a companion to
[Package GitHub Actions automatically with GitHub Actions][blog-post] which
describes how to automatically package GitHub Actions _using_ GitHub Actions,
as an alternative GitHub's recommended strategy.

## Project Structure

### Workflows

- [x] [`package-action.yml`](.github/workflows/package-action.yml) **Package Action** using `ncc` to create a single `dist`
- [x] [`sync-release-branch.yml`](.github/workflows/sync-release-branch.yml) **Synchronise To Release Branch** on push to `main`
- [x] [`test.yml`](.github/workflows/test.yml) **Test Action** with jest for unit and GitHub Workflow for integration
- [x] [`validate-tag.yml`](.github/workflows/validate-tag.yml) **Limit Tags To Distributable Commits** by removing tags on commits without `dist`

## How To Demo

* Fork the repository
* Create a `release` branch from `main`
* Add a commit key (secret, deploy key)

### Synchronising

* Push changes to `main` and observe `release` is updated with changes

### Packaging

* Push changes to `greeter.ts` on `main` and observe `release` is updated with a
new `dist` build

### Tag Validation

* Tag a release on `main` and observe it is removed
* Tag a release on `release` and observe it is persisted

## Greet With Action

```yaml
on: [push]

jobs:
  greet-people:
    runs-on: ubuntu-latest
    steps:
      - id: greeting-actor
        uses: ./
      - name: Greet the user that initiated the workflow run
        run: echo {{ steps.greeting-actor.outputs.greeting }} # Hello, shrink!
      - id: greeting-person
        uses: ./
        with:
          name: "Alice T. Ester"
      - name: Greet the person identified by name
        run: echo {{ steps.greeting-person.outputs.greeting }} # Hello, Alice T. Ester!
```

[blog-post]: https://medium.com/prompt/a70b9f7bae4
