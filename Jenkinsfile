pipeline {
    agent any
    environment {
        DOCKERHUB_CRED = credentials('prakie7') 
        DOCKER_IMAGE = "prak7/react-app:${BUILD_NUMBER}"
    }
    stages {
        stage('Build') { 
            steps {
                sh '''
                docker build -t ${DOCKER_IMAGE} .
                docker login -u officialprakhar2108@gmail.com -p ${DOCKERHUB_CRED}
                '''
            }
        }
        stage('PUSH') {
            steps {
                sh 'docker push ${DOCKER_IMAGE}'
            }
        }
    }
}
