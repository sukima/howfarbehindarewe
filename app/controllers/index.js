import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class Index extends Controller {

  @action
  openLinkToRepoPage(event) {
    event.preventDefault();
    let { ownerRepo, version } = Object.fromEntries(new FormData(event.target));
    let [owner, repo] = ownerRepo.split('/');
    let queryParams = { v: version || 'latest' };
    this.transitionToRoute( 'releases', owner, repo, { queryParams });
  }

}
