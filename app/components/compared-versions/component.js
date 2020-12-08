import Component from '@glimmer/component';

export default class ComparedVersions extends Component {

  get highestType() {
    let ours = this.args.versionA;
    let theirs = this.args.versionB;
    return ours.compare(theirs);
  }

  get diffSize() {
    let { highestType: property } = this;
    let ours = this.args.versionA;
    let theirs = this.args.versionB;
    return theirs[property] - ours[property] || 0;
  }

  get isInvalid() {
    return this.args.versionA.isInvalid || this.args.versionB.isInvalid;
  }

  get isSame() {
    return this.highestType === null;
  }

  get isInFuture() {
    return this.diffSize < 0;
  }

  get absDiffSize() {
    return Math.abs(this.diffSize);
  }

}
