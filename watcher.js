import chokidar from "chokidar";
import { exec } from "child_process";

// File or directory to watch
const targetFile = "node.js"; // Change this to your target file

// Command to execute
const command = "node " + targetFile;

// Initialize watcher
const watcher = chokidar.watch(targetFile, {
  persistent: true,
});

console.log(`Watching changes in ${targetFile}`);

// Add event listeners
watcher
  .on("add", (path) => log(`File ${path} has been added`))
  .on("change", (path) => {
    log(`File ${path} has been changed`);
    executeCommand();
  })
  .on("unlink", (path) => log(`File ${path} has been removed`));

// Execute command
function executeCommand() {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`Output:\n${stdout}`);
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  });
}

// Log function
function log(message) {
  console.log(`[Watcher] ${message}`);
}
