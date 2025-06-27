pipeline {
    agent any
    // escenarios -> escenario -> pasos
    environment{
        NPM_CONFIG_CACHE= "${WORKSPACE}/.npm"
        dockerImageName = "us-west1-docker.pkg.dev/lab-agibiz/docker-repository"
        registry = "https://us-west1-docker.pkg.dev"
        registryCredentials = "gcp-registry"
    }
    stages{
        stage ("saludo a usuario") {
            steps {
                sh 'echo "comenzado mi pipeline"'
            }
        }
        stage ("salida de los saludos a usuario") {
            steps {
                sh 'echo "saliendo de este grupo de escenarios"'
            }
        }
        stage ("proceso de build y test") {
            agent {
                docker {
                    image 'node:22'
                    reuseNode true
                }
            }
            stages {
                stage("instalacion de dependencias"){
                    steps {
                        sh 'npm ci'
                    }
                }
                stage("instalacion de pruebas"){
                    steps {
                        sh 'npm run test:cov'
                    }
                }
                 stage("build de proyecto"){
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage ("build y push de imagen docker"){
            steps{
                docker.withRegistry("${registry}", registryCredentials){
                    sh "docker build -t backend-nest-fls ."
                    sh "docker tag backend-nest-fls ${dockerImageName}/backend-nest-fls"
                    sh "docker push ${dockerImageName}/backend-nest-fls"
                 
                }
            }
        }
    }
}