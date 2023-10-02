pipeline {
    agent any
    environment {
        DOCKERHUB_CRED = credentials('prakie7') 
    }
    stages {
        stage('Build') { 
            steps {
                sh '''
                docker build -t prak7/react-app .
                docker login -u officialprakhar2108@gmail.com -p ${DOCKERHUB_CRED}
                '''
            }
        }
        stage('PUSH') {
            steps {
                sh 'docker push prak7/react-app'
            }
        }
    }
}
