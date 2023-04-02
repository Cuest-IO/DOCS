---
sidebar_position: 3
---

# Connect nodes
# Cuest Agent

## Service for Deploying Kubernetes Components on Local Machine

This service enables users to easily deploy Kubernetes (k8s) components on a local machine. The service includes an agent that establishes a secure WebSocket connection to an Access Point (AP), which sends commands to the service. The service executes these commands and provides the AP with relevant metrics and local details.

## Technologies Used

This service has been developed using the Go 18 programming language.

## Usage

To use this service, follow these steps:

1. To use Cuest Agent on your local machine, you will need to have a Kubernetes installed. Cuest Agent has been tested with Kubernetes distributions such as [minikube](https://minikube.sigs.k8s.io/docs/start/) and [colima](https://github.com/abiosoft/colima#installation), but can be used with any other distribution as well, with some restrictions. Please note that starting, recovering, and stopping the Kubernetes will need to be performed manually for all Kubernetes distributions except `minikube` and `colima`.

2. Download the compiled [Cuest Agent binary](https://github.com/Cuest-IO/cuest-agent/releases) for the appropriate operating system and architecture on your local machine. Alternatively, you can build the agent from source code by following the instructions provided in the [Build](https://github.com/Cuest-IO/cuest-agent#build) section of the repository.

3. Please follow these [instructions](https://github.com/Cuest-IO/cuest-agent#configuration) to configure the `cuest-agent.yaml` file.

4. To start the Cuest Agent, please follow these instructions:
- Open command line with admin access.
- Navigate to the directory where the Cuest Agent is installed.
- Run the following command in the command line interface:
```shell
./cuest-agent run --config cuest-agent.yaml
```
Make sure to replace cuest-agent.yaml with the path to your own configuration file if it is different from the default. This command will start the Cuest Agent and load the configuration specified in the cuest-agent.yaml file.

## Build

To build a new agent for your desired operating system, follow these steps:

1. Open a terminal or command prompt and navigate to the directory where the agent source code is located.
2. Run the following command, replacing `OS` with the appropriate value for your operating system (`linux`, `windows`, or `darwin`):

```shell
GOOS=OS go build -ldflags="-s -w -X cuest-agent/cmd.buildTime=$(date +%Y/%m/%d) -X cuest-agent/cmd.ver=0.0.1"
```

The `GOOS` environment variable tells the Go compiler which operating system to build the agent for. The `-ldflags` parameter specifies the linker flags to use during the build process. These flags include:

- `-X cuest-agent/cmd.buildTime=$(date +%Y/%m/%d)`: Set the build time to the current date in the format `YYYY/MM/DD`.
- `-X cuest-agent/cmd.ver=0.0.1`: Set the version of the agent to `0.0.1`.

After the build process is complete, the agent binary will be located in the same directory as the source code. The binary will be named `cuest-agent` by default.

## Configuration
### Please follow these instructions to configure the [cuest-agent.yaml](https://github.com/Cuest-IO/cuest-agent/blob/main/cuest-agent.yaml) file:

#### Websocket configuration:
```yaml
ws.server: <URL of the websocket server>
ws.pingInterval: <Interval for receiving ping/pong messages from AP>
ws.proxy: <Proxy settings in the format protocol://[user:password]@ip:port, if applicable>
```

#### Device configuration:
```yaml
device.id: <Unique identifier for the device>
device.batteryCapacity: <Minimum battery capacity (percentage) required for creating components in k8s>
device.resourceCapacity: <Minimum remaining capacity required for creating components in k8s>
device.spikes: <List of intervals in which local station's details were updated>
```

#### K8s distribution configuration:
```yaml
distro.type: <Type of K8s distribution (possible values are colima, minikube, and none)>
distro.configPath: <Path of the K8s config file if it is not placed in $HOME/.kube>
distro.vm.type: <Type of virtual machine (possible values are hyperv for Windows, lima for Linux, macOS and colima distro, and none to disable VM configuration)>
distro.vm.cpus: <Count of CPU units>
distro.vm.ramMB: <Amount of RAM allocated>
distro.vm.diskSizeGB: <Amount of disk size allocated>
distro.vm.resourceCapacity: <Minimum remaining capacity required for creating components in k8s in the VM>
```

#### Debug level:
```yaml
debugLevel: <Debug level (possible values are trace, debug, notice, warning, and error)>
```

Please ensure that you fill out the fields in the cuest-agent.yaml file according to the instructions provided above.

