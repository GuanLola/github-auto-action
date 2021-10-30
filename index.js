// github api
// octokit
const { Octokit } = require('octokit')

// TODO auth
const octokit = new Octokit({ auth: `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` });

// octokit api create issue

octokit.rest.issues.create({
  owner: "GuanLola",
  repo: "github-auto-action",
  title: "issue!",
  body: "111"
});