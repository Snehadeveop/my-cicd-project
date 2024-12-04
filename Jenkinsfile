pipeline {
    
    agent any
     tools {
        nodejs 'NodeJS' // Reference the name you gave Node.js in "Global Tool Configuration"
    }
    stages {
        stage('Build') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
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
