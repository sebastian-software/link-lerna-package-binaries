import path from "path"

import createSymlink from "@lerna/create-symlink"
import Command from "@lerna/command"

export class LinkBinaries extends Command {
  initialize() {
    console.log("Linking Lerna package binaries...")
  }

  async execute() {
    const ROOT_BIN = path.join(this.project.rootPath, "node_modules/.bin")

    const linkJobs = []
    for (const targetNode of this.packageGraph.values()) {
      if (targetNode.pkg.bin) {
        for (const binaryName of Object.keys(targetNode.pkg.bin)) {
          const srcPath = path.join(
            targetNode.location,
            targetNode.pkg.bin[binaryName]
          )

          const destPath = path.join(ROOT_BIN, binaryName)

          console.log(`Creating ${destPath}...`)
          linkJobs.push(createSymlink(srcPath, destPath, "exec"))
        }
      }
    }

    await Promise.all(linkJobs)
  }
}
