pipeline {
    agent any
    environment {
        DOCKERHUB_CRED = credentials('dockerhub') 
        DOCKER_IMAGE = "my-react-app:${BUILD_NUMBER}"
    }
    stages {
        stage('Build') { 
            steps {
                sh '''
                docker build -t ${DOCKER_IMAGE} .
                docker login -u prakie7 --password-stdin dckr_pat_Tb_s_gu4JRFDxmCqJAPYcxYlTIY
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
