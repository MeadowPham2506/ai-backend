module.exports = {
    apps: [{
        name: "ai-backend",
        script: "yarn",
        args: "start",
        cwd: process.cwd(),
        instances: 1,
        exec_mode: 'fork',
        autorestart: true,
        watch: false,
        max_memory_restart: "4G"
    }]
};