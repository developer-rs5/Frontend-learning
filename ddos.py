

import threading
import time
import requests


URL = "https://cslab.in" 
DURATION = 30          
THREADS = 500     

success = 0
fail = 0
lock = threading.Lock()

def worker():
    global success, fail
    end_time = time.time() + DURATION
    while time.time() < end_time:
        try:
            r = requests.get(URL, timeout=10)
            with lock:
                if 200 <= r.status_code < 400:
                    success += 1
                else:
                    fail += 1
        except Exception:
            with lock:
                fail += 1

def main():
    global success, fail
    print(f"Starting stress test: {URL}")
    print(f"Threads: {THREADS}, Duration: {DURATION}s\n")

    threads = []
    start = time.time()
    for _ in range(THREADS):
        t = threading.Thread(target=worker)
        t.start()
        threads.append(t)

    for t in threads:
        t.join()

    elapsed = time.time() - start
    total = success + fail
    rps = total / elapsed if elapsed > 0 else 0

    print("\n=== Results ===")
    print(f"Total Requests: {total}")
    print(f"Successful:     {success}")
    print(f"Failed:         {fail}")
    print(f"Requests/sec:   {rps:.2f}")

if __name__ == "__main__":
    main()
