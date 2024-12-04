pipeline {
    agent any
    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs() // Clean the workspace to avoid any conflicts
            }
        }
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t my-node-app .'
            }
        }
        stage('Docker Run') {
            steps {
                sh 'docker ps -q --filter "name=my-node-app" | xargs -r docker stop' // Stop any existing container
                sh 'docker run -d -p 8081:8080 my-node-app' // Change to 8081 or another port
            }
        }
    }
}
