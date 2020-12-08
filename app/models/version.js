import semver from 'semver';
import { tracked } from '@glimmer/tracking';

const INVALID_VERSION = Object.freeze({
  number: 'invalid',
  major: NaN,
  minor: NaN,
  patch: NaN,
  isInvalid: true,
  compare() { return undefined; }
});

export default class Version {
  @tracked semver;

  constructor(number) {
    this.semver = number;
    Object.defineProperty(this, 'isInvalid', { value: false });
  }

  get number() {
    return this.semver.version;
  }

  get major() {
    return this.semver.major;
  }

  get minor() {
    return this.semver.minor;
  }

  get patch() {
    return this.semver.patch;
  }

  compare(version) {
    return semver.diff(this.semver, version.semver);
  }

  static create(number) {
    let version = semver.coerce(number);
    return version ? new Version(version) : INVALID_VERSION;
  }

}
