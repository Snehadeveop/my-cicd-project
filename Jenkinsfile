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

        /*
        stage('Test') {
            steps {
                // Run tests (currently commented out, uncomment to use)
                sh 'npm test'
            }
        }
        */
        
        stage('Docker Build') {
            steps {
                // Build Docker image
                sh 'docker build -t my-node-app .'
            }
        }
        
        stage('Docker Run') {
            steps {
                // Run Docker container
                // -d flag runs the container in detached mode
                // -p flag maps host port 8080 to container port 8080
                sh 'docker run -d -p 8080:8080 my-node-app'
            }
        }
    }
}
