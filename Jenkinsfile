pipeline {
    agent any
    environment {
        DOCKERHUB_CRED = credentials('prakie7') 
    }
    stages {
        stage('Build') { 
            steps {
                sh '''
                docker build -t prakie7/textimize-react-app .
                docker login -u officialprakhar2108@gmail.com -p ${DOCKERHUB_CRED}
                '''
            }
        }
        stage('PUSH') {
            steps {
                sh 'docker push prakie7/textimize-react-app'
            }
        }
    }
}
