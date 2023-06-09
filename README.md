In the project directory, you can run:

```sh
minikube start
minikube ssh
sudo ip link set docker0 promisc on
minikube addons enable ingress
minikube addons enable ingress-dns
kubectl apply -f deploy.yaml
kubectl apply -f k8s
minikube tunnel
```

Starts up the kubernetes cluster locally<br />
Open [http://example.local/](http://example.local) to test it in the browser after modifying the etc/host file and mapping the url to ingress-service ip address.