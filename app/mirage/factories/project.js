import Mirage, {faker} from 'ember-cli-mirage';

var categories = [
  'Comics',
  'Movies',
];

export default Mirage.Factory.extend({
  title() {
    return faker.name.title();
  },

  cover: 'http://lorempixel.com/400/400',

  category(i) {
    return categories[i % 2];
  },
});
