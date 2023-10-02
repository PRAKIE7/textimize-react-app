pipeline {
    agent any
    environment {
        DOCKERHUB_CRED = credentials('dockerhub') 
        DOCKER_IMAGE = "prak7/react-app:${BUILD_NUMBER}"
    }
    stages {
        stage('Build') { 
            steps {
                sh '''
                docker build -t ${DOCKER_IMAGE} .
                docker login -u prakie7 -p ${DOCKERHUB_CRED}
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
