# Contributing to `yargsa`

The `yargsa` project welcomes all contributions from anyone willing to work in good faith with
other contributors and the community. No contribution is too small and all contributions are
valued.

## Issues

- You can open [issues here](https://github.com/bcoe/yargsa/issues), please follow the template
  guide.
- You can join the `node-tooling/yargs` channel,
  [follow this link](https://devtoolscommunity.herokuapp.com/) to request for an invite.

## Pull Requests

Pull Requests are the way concrete changes are made to the code, documentation, dependencies, and
tools contained in the `yargsa` repository.

### Setting up your local environment

1. Make sure you have installed the latest version of Node.js
1. Fork this project on Github and clone your fork locally:

```
$ git clone git@github.com:username/yargsa.git
$ cd yargsa
$ git remote add upstream https://github.com/yargs/yargsa.git
$ git fetch upstream
```

1. Create local branches to work within. These should also be created directly off of the master
   branch:

```
$ git checkout -b my-branch -t upstream/master
```

1. Make your changes
1. Run tests to make sure all is okay (everything should pass except snapshot):

```
$ npm test
```

1. Now update the snapshot

```
$ npm run test:snap
```

2. If all is passing, commit your changes.
3. As a best practice, once you have committed your changes, it is a good idea to use git rebase
   (not git merge) to synchronize your work with the main repository:

```
$ git fetch upstream
$ git rebase upstream/master
```

1. Run tests again to make sure all is okay
1. Push:

```
$ npm test
```

1. Open the pull request, see details in the template.
1. Make any necessary changes after review.

## Note

This guide is adapted from the
[Node.js project](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#dependencies),
check it out for more details.
