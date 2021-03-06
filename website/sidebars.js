module.exports = {
	docs: {
		Introduction: [
			'introduction',
			'architecture',
			'tutorials',
			'chaos-hub'
			// "feature-definition"
		],
		'Getting Started': [
			'getstarted',
			{
				Installation: [
					'litmus-install-cluster-mode',
					'litmus-install-namespace-mode',
					'agent-install',
					'litmus-with-ingress'
				]
			},
			'create-workflow',
			'observe-workflow',
			{
				Uninstallation: ['agent-uninstall', 'litmus-uninstall']
			}
		],
		'User Guide': [
			{
				'Day 0': ['d0-create', 'd0-observe']
			},
			{
				'Day 1': ['d1-schedule', 'd1-update', 'settings']
			},
			{
				'Day 2': ['myhub', 'gitops', 'probes']
			}
		],
		//    Features: [
		//    "gitops",
		//  "settings",
		// "myhub",
		// "settings",
		// "analytics",
		// "myhub",
		// "external-agents"
		//],
		//Concepts: [
		//"probes",
		//   "cross-cloud-control",
		//   "litmusctl",
		// "crds",
		//   "rbac",
		//   "service-acounts",
		// ],
		Advanced: ['litmus-psp', 'k8s-support']
	}
}
