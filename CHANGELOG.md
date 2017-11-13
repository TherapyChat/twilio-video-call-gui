# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!--
## [UNRELEASED]
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
-->




## [UNRELEASED]
### Added
- Minimize functionality
  - Now the user can minimize the video overlay and hide it
### Changed
- Replaced timer with [`time-counter`](https://www.webcomponents.org/element/TherapyChat/time-counter) component.




## v2.0.1 - 2017-11-06
### Changed
- Change travis build config to use polylint and wct until polymer-cli works well




## v2.0.0 - 2017-11-06
### BREAKING CHANGES
- Refactor how whole component works
### Added
- New child element `twilio-video-participant-gui` to handle participants logic
### Changed
- Now the elements use slots to allow avatars injection
### Removed
- `prepublishOnly` script.




## v1.0.6 - 2017-10-18
### Added
- `prepublishOnly` script to upload repo before publish




## v1.0.5 - 2017-10-18
### Added
- Now the project has a script to version the changelog properly when `npm version` runs
- New contributor [Miguel del Mazo](https://github.com/migueldelmazo)
### Changed
- Now bower.json file doesn't have version property




## v1.0.4
### Removed
- MomentJS dependency




## v1.0.0

### Added

- Whole repo containing the element
