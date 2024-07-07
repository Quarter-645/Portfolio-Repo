@echo off
rem Delete existing port forwarding rule if it exists
netsh interface portproxy delete v4tov4 listenport=80 listenaddress=0.0.0.0

rem Add new port forwarding rule
netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=80 connectaddress=172.29.185.89

echo Port forwarding set up from Windows port 80 to WSL IP 172.29.185.89 port 80
pause
