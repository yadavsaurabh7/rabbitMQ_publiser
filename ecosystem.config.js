module.exports = {
    apps : [
        {
          name: "dev-api",
          script: "./index.js",
          watch: true,
          env: {
              "PORT": 6001,
              "NODE_ENV": "development",
             //"AMQP_URL":"amqp://test:test@172.31.28.249:5672?heartbeat=60"
              "AMQP_URL":"amqp://guest:guest@localhost:5672?heartbeat=60"
          },
          env_production: {
              "PORT": 6000,
              "NODE_ENV": "production",
              "AMQP_URL":"amqp://test:test@172.31.28.249:5672?heartbeat=60"
          },
          log_date_format : "YYYY-MM-DD HH:mm Z"
        }
    ]
  }
