# service-worker-test

To test this locally (you should have python & virtualenv installed), follow this:

* Clone this repo
* cd service-worker-test and create the virtual environment `virtualenv venv`
* Activate virtual environment - `. venv/bin/activate`
* run `pip install requirements.txt`
* start the server `./run.py`
* Go check http://localhost:5000 on a browser that supports service worker
* stop the server (Ctrl+C)
* Go back to the browser and refresh - you should still see the page
