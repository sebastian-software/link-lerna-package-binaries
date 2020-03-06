import path from "path"

import createSymlink from "@lerna/create-symlink"
import Command from "@lerna/command"

export class LinkBinaries extends Command {
  initialize() {
    console.log("Run Init")
  }

  async execute() {
    const ROOT_BIN = path.join(this.project.rootPath, "node_modules/.bin")

    const linkJobs = []
    for (const targetNode of this.packageGraph.values()) {
      if (targetNode.pkg.bin) {
        for (const binaryName of Object.keys(targetNode.pkg.bin)) {
          const src = path.join(
            targetNode.location,
            targetNode.pkg.bin[binaryName]
          )

          const dest = path.join(ROOT_BIN, binaryName)

          console.log(`Creating ${dest}...`)

          linkJobs.push(createSymlink(src, dest, "exec"))
        }
      }
    }

    await Promise.all(linkJobs)
  }
}
