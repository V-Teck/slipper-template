This directory contains a Jenkinsfile which can be used to build
nodejs-al using an OpenShift build pipeline.

To do this, run:

```bash
# create the nodejs example as usual
oc new-app https://github.com/V-Teck/slipper-template

# now create the pipeline build controller from the openshift/pipeline
# subdirectory
oc new-app https://github.com/V-Teck/slipper-template \
  --context-dir=openshift/pipeline --name nodejs-sl-pipeline
```
