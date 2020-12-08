import Route from '@ember/routing/route';
import UriTemplate from 'uri-templates';

const releaseTemplate = new UriTemplate('https://api.github.com/repos/{owner}/{repo}/releases/latest');

export default class Releases extends Route {

  queryParams = { version: { as: 'v' } };

  async model(params) {
    let res = await fetch(releaseTemplate.fill(params));
    if (res.status < 200 || res.status >= 400) {
      throw new Error(res.statusText);
    }
    let latest = await res.json();
    return { latest, refresh: () => this.refresh() };
  }

  setupController(controller) {
    super.setupController(...arguments);
    controller.updateDefaultVersion();
  }

}
