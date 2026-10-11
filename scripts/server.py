import http.server
import socketserver
import os
import sys

PORT = 3336
DIRECTORY = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'out'))

class CleanUrlHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        path_part = self.path.split('?')[0]
        if path_part != '/' and not os.path.splitext(path_part)[1]:
            candidate = os.path.join(DIRECTORY, path_part.lstrip('/') + '.html')
            if os.path.isfile(candidate):
                self.path = path_part + '.html'
        return super().do_GET()

class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True

with ThreadedHTTPServer(("127.0.0.1", PORT), CleanUrlHandler) as httpd:
    print(f"Threaded static server running at http://127.0.0.1:{PORT}")
    sys.stdout.flush()
    httpd.serve_forever()
