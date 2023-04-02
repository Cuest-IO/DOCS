---
sidebar_position: 2
---

# Connect a cluster
Deploy a Kubernetes cluster of your choice. 

## Usage

To use this service, follow these steps:

1. To use VN on your local machine, you'll need Kubernetes installed. You can install [minikube](https://minikube.sigs.k8s.io/docs/start/) or [colima](https://github.com/abiosoft/colima#installation), or you can connect to a cloud-based Kubernetes installation.

2. To create accounts and roles, it is necessary to download and apply a [file](https://github.com/Cuest-IO/virtualkublet/blob/main/hack/skaffold/vk-cuest/base.yml) 
```shell
kubectl apply -f base.yml
```

3. To create a virtual node, follow these steps:
- Download the necessary file from this secure [link](https://github.com/Cuest-IO/virtualkublet/blob/main/hack/skaffold/vk-cuest/pod.yml)
- Set the WS_URL environment variable, replacing 'tenant=123456789' with your actual tenant ID, to ensure proper connectivity to the WebSocket server.
- Set the KUBELET_ID environment variable to ensure proper functioning of the virtual node.
- To implement the changes, apply the modified file.
```shell
kubectl apply -f pod.yml
```

## Build

To build a new VN, please follow these steps:

1. If you haven't already, install Docker.
2. Download the source code and navigate to the root directory of the project.
3. Build the Docker image:
```shell
docker build . -t [your repo]/cuest-kubelet:0.0.1
```
4. To publish the Docker image, push it to your repository.
```shell
docker push [your repo]/cuest-kubelet:0.0.1
```

To utilize your newly created Docker image, incorporate it as [your repo]/cuest-kubelet:0.0.1 in the [file](https://github.com/Cuest-IO/virtualkublet/blob/main/hack/skaffold/vk-cuest/pod.yml) and apply the changes accordingly.

## Test 

In order to run pods in the VN, add nodeSelector to the pod specification.
```yaml
nodeSelector:
    type: virtual-kubelet
tolerations:
  - key: virtual-kubelet.io/provider
    operator: "Equal"
    value: "cuest"
    effect: NoSchedule
```

Here is an example of the [Echo server](https://github.com/Cuest-IO/virtualkublet/blob/main/hack/test-deploy/dummy-payload/deployment.yaml)


## Technologies Used

This service has been developed using the Go 18 programming language.
