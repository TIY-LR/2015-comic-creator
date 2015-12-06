import _ from 'lodash';

export default function(server) {
  let projectOne = server.create('project', {tiles: _.range(1, 16)});

  server.createList('project', 5);

  server.createList('tile', 15, {project: projectOne.id});
}
