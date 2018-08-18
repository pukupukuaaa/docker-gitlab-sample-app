# Overview

Gitlab, Gitlab Runner ci project sample Node.js app

# How to start

1. Build Docker image.

    ```
    > docker build -t myapp .
    ```
2. Run app

    ```
    > docker run -d --name myapp -p 3000:3000 myapp
    ```