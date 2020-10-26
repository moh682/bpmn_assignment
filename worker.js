const { Client, logger } = require('camunda-external-task-client-js');

const config = { baseUrl: 'http://localhost:8080/engine-rest', use: logger, asyncResponseTimeout: 10000 };

const client = new Client(config);

client.subscribe('save-review', async function ({ task, taskService }) {
  // Put your business logic here

  const review = task.variables.get('review');

  console.log('No Profanities found in: ' + review);
  console.log('save review in database...');

  // Complete the task
  await taskService.complete(task);
});
