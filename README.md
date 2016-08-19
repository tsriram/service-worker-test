# service-worker-test

To test this locally, follow this:

0. You should have python & virtualenv installed
1. Clone this repo
2. cd service-worker-test and create the virtual environment `virtualenv venv`
3. run `pip install requirements.txt`
4. start the server `./run.py`
5. Go check http://localhost:5000 on a browser that supports service worker
6. stop the server (Ctrl+C)
7. Go back to the browser and refresh - you should still see the page
