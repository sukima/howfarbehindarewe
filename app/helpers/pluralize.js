import Helper from '@ember/component/helper';
import pluralize from 'pluralize';

export function pluralizeHelper([noun, count = 0], { showNumber = false }) {
  return pluralize(noun, count, showNumber);
}

export default Helper.helper(pluralizeHelper);
