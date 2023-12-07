import * as core from "@actions/core";

const run = async () => {
  const yamlFiles = core.getInput("yaml_files");
  console.log("All Yaml files wuhuhu", yamlFiles);
};

run();
