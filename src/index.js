import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  // `who-to-greet` input defined in action metadata file
  const repo_id = core.getInput("repo_id");

  const owner_id = core.getInput("owner_id");
  core.info(`Repo full path is ${owner_id}/${repo_id}`);

  // Get the current time and set it as an output variable
  const url = `${owner_id}/${repo_id}`;
  core.setOutput("url", url);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.info(`The event payload: ${payload}`);

  const { spawnSync } = require("child_process");
  const ls = spawnSync("poetry run bridge cli --help");

  core.info(`stderr: ${ls.stderr.toString()}`);
  core.info(`stdout: ${ls.stdout.toString()}`);
} catch (error) {
  core.setFailed(error.message);
}
