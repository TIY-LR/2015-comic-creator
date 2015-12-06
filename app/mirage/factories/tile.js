import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  url: 'http://lorempixel.com/400/400',

  caption() {
    return faker.lorem.sentence(4);
  },

  orderNumber(i) {
    return i;
  },
});
