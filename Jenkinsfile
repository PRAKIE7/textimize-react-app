pipeline {
    agent {
        docker {
            image 'node:18.18.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
    stage('Trivy Scan') {
            steps {
                script {
                    sh """trivy image --format template --template \"@/home/vijeta1/contrib/html.tpl\" --output trivy_report.html XXXXXXX.dkr.ecr.ap-south-1.amazonaws.com/${params.SERVICE}:${BUILD_NUMBER} """
                    
                }
                
            }
        }
    post {
        always {
            archiveArtifacts artifacts: "trivy_report.html", fingerprint: true
                
            publishHTML (target: [
                allowMissing: false,
                alwaysLinkToLastBuild: false,
                keepAll: true,
                reportDir: '.',
                reportFiles: 'trivy_report.html',
                reportName: 'Trivy Scan',
                ])
            }
        }

}