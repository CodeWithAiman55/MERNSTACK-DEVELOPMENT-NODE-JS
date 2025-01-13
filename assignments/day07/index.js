/* 
Write a function that deletes a folder along with its contents (With n number of sub-folders)

Also use
Use ReadFile, WriteFile, Rename, 
Readable file streams
Writable file streams
*/

const fs = require('fs');
const path = require('path');

fs.mkdir("folder1", (err) => {
  if (err) {
    console.error("Error creating folder1:", err);
    return; 
  }
  console.log("Folder1 is created successfully");

  fs.mkdir("folder1/subFolder1", (err) => {
    if (err) {
      console.error("Error creating subFolder1:", err);
      return; 
    }
    console.log("Subfolder1 is created successfully");

    fs.writeFile("folder1/subFolder1/bio.txt", "My name is aimy", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return; 
      }
      console.log("File is created successfully");

      fs.readFile("folder1/subFolder1/bio.txt", 'utf-8', (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return; 
        }
        console.log("File content:", data);

        fs.rename("folder1/subFolder1/bio.txt", "folder1/subFolder1/mybio.txt", (err) => {
          if (err) {
            console.error("Error renaming file:", err);
            return; 
          }
          console.log("File renamed to mybio.txt");

          deleteFolder("folder1");
        });
      });
    });
  });
});

// Function to delete a folder and all its contents
function deleteFolder(folderPath) {
  // Read all items (files and folders) inside the folder
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading folder ${folderPath}:`, err);
      return; 
    }

    let remaining = files.length; 

    if (remaining === 0) {
      return removeFolder(folderPath); 
    }

    // Loop through each item in the folder
    files.forEach((file) => {
      const currentPath = path.join(folderPath, file); 

      fs.stat(currentPath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats of ${currentPath}:`, err);
          return; 
        }

        if (stats.isDirectory()) {
          
          deleteFolder(currentPath);
        } else {
         
          fs.unlink(currentPath, (err) => {
            if (err) {
              console.error(`Error deleting file ${currentPath}:`, err);
              return; 
            }
            console.log(`File deleted: ${currentPath}`);
            remaining -= 1; 
            if (remaining === 0) removeFolder(folderPath); 
          });
        }
      });
    });
  });
}

// Helper function to delete an empty folder
function removeFolder(folderPath) {
  fs.rmdir(folderPath, (err) => {
    if (err) {
      console.error(`Error removing folder ${folderPath}:`, err);
      return; 
    }
    console.log(`Folder deleted: ${folderPath}`);
  });
}
