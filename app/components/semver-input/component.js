import Component from '@glimmer/component';
import semver from 'semver';
import { action } from '@ember/object';

export default class SemverInput extends Component {

  @action
  isValidSemver(value) {
    return semver.coerce(value) !== null;
  }

}
