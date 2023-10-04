pipeline {
    agent any
    environment {
       DOCKERHUB_CREDENTIALS = credentials('dockerhub1') 
    }
    stages {
        stage('Build') {
          steps {
            sh 'docker build -t prakie7/react-app .'
          }
        }
        stage('Trivy') {
            steps {
                script{
                    sh 'trivy image prakie7/react-app'
                }
            }
        }
        stage('Login') { 
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin' 
            }
        }
        stage('PUSH') {
            steps {
                sh 'docker push prakie7/react-app'
            }
        }
    }
}
