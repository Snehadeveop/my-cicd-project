pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Make sure NodeJS is installed in Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    // Directly check out the 'feature/add-docker' branch
                    git branch: 'feature/add-docker', url: 'https://github.com/Snehadeveop/my-cicd-project.git'
                }
            }
        }
        stage('Build') {
            steps {
                // Verify the contents of the workspace
                sh 'ls -la' // This helps confirm that package.json is present
                // Install dependencies
                sh 'npm install'
            }
        }
        stage('Docker Build') {
            steps {
                // Build Docker image
                sh 'docker build -t my-node-app .'
            }
        }
        stage('Docker Run') {
            steps {
                // Run Docker container
                sh 'docker run -d -p 8080:8080 my-node-app'
            }
        }
    }
}
