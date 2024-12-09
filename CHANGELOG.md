# Changelog

## [2.2.0](https://github.com/node-modules/is-type-of/compare/v2.1.0...v2.2.0) (2024-12-09)


### Features

* hasOwn support Node.js 14 ([#25](https://github.com/node-modules/is-type-of/issues/25)) ([857bdff](https://github.com/node-modules/is-type-of/commit/857bdff38486cc327ca93599aad5168150559eaa))

## [2.1.0](https://github.com/node-modules/is-type-of/compare/v2.0.1...v2.1.0) (2023-11-25)


### Features

* use tshy to build and support ESM and CommonJS both ([#22](https://github.com/node-modules/is-type-of/issues/22)) ([3688cd6](https://github.com/node-modules/is-type-of/commit/3688cd67dbb75304016220ec4f882a56dcc8d38f))

## [2.0.1](https://github.com/node-modules/is-type-of/compare/v2.0.0...v2.0.1) (2023-08-02)


### Bug Fixes

* compatible regexp ([#20](https://github.com/node-modules/is-type-of/issues/20)) ([a68e5cb](https://github.com/node-modules/is-type-of/commit/a68e5cbd23afc82a9e1d3a9cb48116bc104ca067))
* use npm instead of tnpm ([96b5b4e](https://github.com/node-modules/is-type-of/commit/96b5b4e436b6ab33568510e8dc9dab9ce4a891a6))

## [2.0.0](https://github.com/node-modules/is-type-of/compare/v1.4.0...v2.0.0) (2023-07-28)


### ⚠ BREAKING CHANGES

* drop Node.js <= 14

### Features

* rewrite in typescript ([#19](https://github.com/node-modules/is-type-of/issues/19)) ([58b5703](https://github.com/node-modules/is-type-of/commit/58b5703ea3329b29790963e221023e8deeb0f97d))

## [1.4.0](https://github.com/node-modules/is-type-of/compare/v1.3.0...v1.4.0) (2023-05-04)


### Features

* Add bigInt ([#18](https://github.com/node-modules/is-type-of/issues/18)) ([695bcaf](https://github.com/node-modules/is-type-of/commit/695bcaf30d0b808012ddad169ccc3cef0c55202f))

## [1.3.0](https://github.com/node-modules/is-type-of/compare/v1.2.1...v1.3.0) (2023-05-04)


### Features

* add d.ts support ([#17](https://github.com/node-modules/is-type-of/issues/17)) ([edcedcc](https://github.com/node-modules/is-type-of/commit/edcedcc70af64c054cc834e5dd2ed79edd4692ff))

---


1.2.1 / 2018-09-22
==================

**fixes**
  * [[`1468e4e`](http://github.com/node-modules/is-type-of/commit/1468e4e2d2a1221ff25187f430e5546db2fadacc)] - fix: hotfix is-class bug (#10) (fengmk2 <<fengmk2@gmail.com>>)

**others**
  * [[`32aab2b`](http://github.com/node-modules/is-type-of/commit/32aab2b5431e76529f2cf9ddf1d112b99ed05394)] - chore: Improve some functions (#8) (Runrioter Wung <<runrioter@gmail.com>>)

1.2.0 / 2017-08-10
==================

  * feat: Add async function test function. (#6)

1.1.0 / 2017-07-19
==================

  * deps: upgrade is-class@0.0.4
  * feat: is.array() use Array.isArray() directly
  * feat: improve is.error performance
  * feat: improve is.regExp performance
  * test: support coverage
  * feat: imrpove is.date performance (#4)

1.0.0 / 2015-11-09 
==================

  * deps: update all dependencies
  * detect class

0.3.1 / 2014-06-20
==================

  * add is.finite()

0.3.0 / 2014-05-10
==================

  * split Long from long
  * fix history

0.2.1 / 2014-04-22
==================

  * bump deps version
  * Merge pull request #1 from node-modules/support-long-module
  * is.long() support long module
  * refactor

0.2.0 / 2014-04-07
==================

  * add readme for isstream
  * add isStream
  * add travis-yml

0.1.0 / 2014-04-03
==================

  * add isNaN

0.0.2 / 2014-04-01
==================

  * add is.int32

0.0.1 / 2014-03-12
==================

  * add readme
  * add test, add number type checker
  * add core-util-is and generator promise
  * Initial commit
