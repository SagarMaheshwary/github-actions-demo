# NODEJS - GITHUB ACTIONS DEMO

This repository is set up with GitHub Actions to automate the process of building and deploying the Docker image. The CI/CD pipeline includes the following key steps:

### Building and Pushing Docker Image

- The workflow is triggered on pushes to the master branch and when pull requests to master are merged.
- It checks out the code, sets up Docker Buildx, and logs into Docker Hub using the provided credentials.
- It builds the Docker image and pushes it to Docker Hub with tags for both latest and the current commit SHA.

### Running Tests

- Before building the Docker image, the pipeline runs npm run test to execute the tests for the application.
- If any tests fail, the pipeline will fail, preventing the Docker image from being built or pushed.

### Simulating Test Success and Failure

- You can simulate a passing test by modifying the test script in your package.json like this:

```json
"scripts": {
  "test": "echo \"Test successful!\""
}
```

- To simulate a failing test, you can change the script to:

```json
"scripts": {
  "test": "echo \"Test failed!\" && exit 1"
}
```

- In either case, the results of npm run test will determine whether the pipeline continues to build and push the Docker image.

### Variables and Secrets

- In your GitHub repository settings, navigate to Secrets and add the following secrets:
  - DOCKER_USERNAME: Your Docker Hub username.
  - DOCKER_PASSWORD: Your Docker Hub password.
- And define a variable for your Docker Hub repository:
  - DOCKER_HUB_REPO: Set this variable to the name of your Docker Hub repository (e.g., your-dockerhub-username/node-app).
