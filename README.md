# Competidaily Generator backend - GET THEMES

This repo contains the GET requisition used as a lambda function to retrieve a random theme from the competidaily database.

> **Warning**
> Please read this README before opening an issue or a pull request. Pull requests and issues that do not follow guidelines will be closed.

Contents
========

 * [Installation](#installation)
 * [Folder structure](#structure)
 * [Deploy](#deploy)
 * [Want to contribute?](#want-to-contribute)

### Installation
---

#### Clone this repo and install all dependencies:

```bash
$ git clone https://github.com/uxthi/competidaily-generator-backend.git
$ cd competidaily-generator-backend
$ cd npm install
```

#### Structure
---

```shell
├── .github
│   ├── workflows
│   │   └── main.yml (action to deploy on lambda)
│   │   └── ... (other actions)
│   ├── CODEOWNERS (list of people who needs to approve prs)
│   ├── pull_request_template.md 
├── .gitignore
├── README
├── index.js (function used on aws lambda)
├── package.json
├── package-lock.json
```

### Deploy
---

All pull requests merged on `master` branch will be deployed to AWS lambda as a github action.

### Want to Contribute?
---

1. Start by opening an issue on this repo. 
1.1. If you think you found a bug, try explain it and give as much detail as possible, as well as steps to reproduce your problem.
1.2. If it's a feature suggestion, please explain what do you want and why should we implement it.

You can always open a PR solving any issue or adding a feature. Please DO NOT open PR without first opening an Issue or making sure that there is already an opened issue. Also, always reference said Issue on your pull request.
