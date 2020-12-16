module.exports = {
  docs: {
    "Getting Started": [
      "getstarted",
      "chaoshub",
      "plugins",
      "architecture",
      "resources",
      "devguide",
      {
        Platforms: [
          {
            type: "category",
            label: "OpenShift",
            items: ["openshift-litmus"],
          },
          {
            type: "category",
            label: "Rancher",
            items: ["rancher-litmus"],
          },
        ],
      },
    ],
    "Litmus Demo": ["litmus-demo"],
    Concepts: [
      {
        type: "category",
        label: "Custom Resources",
        items: [
          "chaosengine",
          "chaosexperiment",
          "chaosschedule",
          "chaosresult",
        ],
      },
      {
        type: "category",
        label: "Hypothesis",
        items: ["litmus-probe"],
      },
      {
        type: "category",
        label: "Operational Modes",
        items: ["admin-mode", "namespaced-mode"],
      },
      {
        type: "category",
        label: "Security",
        items: ["litmus-psp"],
      },
    ],
    Experiments: [
      {
        type: "category",
        label: "Generic",
        items: [
          "pod-delete",
          "container-kill",
          "pod-network-latency",
          "pod-network-loss",
          "pod-network-corruption",
          "pod-cpu-hog",
          "pod-memory-hog",
          "disk-fill",
          "disk-loss",
          "node-cpu-hog",
          "node-memory-hog",
          "node-drain",
          "kubelet-service-kill",
          "pod-network-duplication",
          "node-taint",
          "docker-service-kill",
          "pod-autoscaler",
          "Kubernetes-Chaostoolkit-Application",
          "Kubernetes-Chaostoolkit-Service",
          "pod-io-stress",
          "node-io-stress",
          "node-restart",
        ],
      },
      {
        type: "category",
        label: "Kube-AWS",
        items: ["Kubernetes-Chaostoolkit-AWS", "ebs-loss", "ec2-terminate"],
      },
      {
        type: "category",
        label: "OpenEBS",
        items: [
          "openebs-target-container-failure",
          "openebs-target-network-delay",
          "openebs-target-network-loss",
          "openebs-target-pod-failure",
          "openebs-pool-pod-failure",
          "openebs-pool-container-failure",
          "openebs-pool-network-delay",
          "openebs-pool-network-loss",
          "openebs-control-plane-chaos",
          "cStor-pool-chaos",
          "openebs-pool-disk-loss",
          "openebs-nfs-provisioner-kill",
        ],
      },
      {
        type: "category",
        label: "Kafka",
        items: ["kafka-broker-pod-failure", "kafka-broker-disk-failure"],
      },
      {
        type: "category",
        label: "CoreDns",
        items: ["coredns-pod-delete"],
      },
      {
        type: "category",
        label: "Cassandra",
        items: ["cassandra-pod-delete"],
      },
      {
        type: "category",
        label: "Kube-Components",
        items: [
          "Kubernetes-Chaostoolkit-Cluster-Kiam",
          "Kubernetes-Chaostoolkit-Cluster-active-monitor-controller",
          "Kubernetes-Chaostoolkit-Cluster-alb-ingress-controller",
          "Kubernetes-Chaostoolkit-Cluster-kube-proxy",
          "Kubernetes-Chaostoolkit-Cluster-prometheus-k8s-prometheus",
          "Kubernetes-Chaostoolkit-Cluster-prometheus-pushgateway",
          "Kubernetes-Chaostoolkit-Cluster-prometheus-operator",
          "Kubernetes-Chaostoolkit-Cluster-Calico-Node",
          "Kubernetes-Chaostoolkit-Cluster-Wavefront",
        ],
      },
    ],
    Scheduler: ["scheduling"],
    "Chaos Workflow": ["chaos-workflows"],
    FAQs: ["faq-general"],
    Troubleshooting: ["faq-troubleshooting"],
  },
};
