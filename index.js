// github api
// octokit
const { Octokit } = require('octokit')
const core = require('@actions/core');

// TODO auth
const token = core.getInput('token')
const octokit = new Octokit(
  { auth: token }
);

// octokit api create issue

octokit.rest.issues.create({
  owner: "GuanLola",
  repo: "github-auto-action",
  title: "issue!",
  body: "111"
});