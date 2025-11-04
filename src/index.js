import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  // `who-to-greet` input defined in action metadata file
  const repo_id = core.getInput("repo_id");

  const owner_id = core.getInput("owner_id");
  core.info(`Repo full path is ${owner_id}/${repo_id}`);

  //   // Get the current time and set it as an output variable
  //   const time = new Date().toTimeString();
  //   core.setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.info(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
