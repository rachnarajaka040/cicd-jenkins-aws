node {
    def appDir = '/var/www/reactjs-app'
    
    stage('Clean Workspace') {
        deleteDir()
    }

    stage('Clone Repo') {
        echo 'Cloning repository...'
        git branch: 'main', url: 'https://github.com/rachnarajaka040/cicd-jenkins-aws.git'
    }

    stage('Deploy to Ec2') {
        echo 'Deploying to EC2...'
        sh """
            # Directory setup
            sudo mkdir -p ${appDir}
            sudo chown -R jenkins:jenkins ${appDir}

            # Ab sara code root par hai, toh hum seedhe ./ se sync karenge
            rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}/
            
            cd ${appDir}
            
            # Install and Build
            npm install
            npm run build --if-present

            # Port 3000 clear karna
            sudo fuser -k 3000/tcp || true
            
            # App start karna
            export JENKINS_NODE_COOKIE=dontKillMe
            nohup npm start > /dev/null 2>&1 &
        """
    }
}