import Controller from '@ember/controller';
import Version from 'howfarbehindarewe/models/version';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default class Releases extends Controller {

  queryParams = ['version'];

  @tracked version = '';

  get comparedVersion() {
    return Version.create(this.version);
  }

  get latestVersion() {
    return Version.create(this.model.latest.tag_name);
  }

  updateDefaultVersion() {
    scheduleOnce('afterRender', this, 'setVersionToDefault');
  }

  setVersionToDefault() {
    if (this.version === '') {
      this.version = this.latestVersion.number;
    }
  }

  @action
  updateVersion(event) {
    let { target: field } = event;
    this.version = field.value;
  }

}
