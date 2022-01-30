
## The difference between synchronous and asynchronous reading of files

Difference between Asynchronous and Synchronous methods:

<table>
<tr>
  <th>
  Sr.no
  </th>
  <th>
   Synchronous methods
  </th>
  <th>
  Asynchronous methods
  </th>
</tr>
<tr>
  <td>1.</td>
  <td>Synchronous functions are called blocking functions.</td>
  <td>Asynchronous functions are called non-blocking functions.</td>
</tr>
<tr>
  <td>2.</td>
  <td>It blocks the execution of the program until the file operation has finished processing.</td>
  <td>It does not block the execution of the program.</td>
</tr>
<tr>
  <td>3.</td>
  <td>These functions take File Descriptor as the last argument.</td>
  <td>These functions take a callback function as the last argument.</td>
</tr>
<tr>
  <td>4.</td>
  <td>Examples: fs.readFileSync(), fs.appendFileSync(), fs.writeFileSync() etc.	</td>

  <td>Examples: fs.readFile(), fs.appendFile(), fs.writeFile(), fs.stat() etc. </td>
</tr>
</table>

![Screenshot (139)](https://user-images.githubusercontent.com/80479635/151710556-81513f14-fd76-46a3-bc36-c18274a20e34.png)
![Screenshot (141)](https://user-images.githubusercontent.com/80479635/151710526-407fc8b7-b6f7-43d0-9fda-7d6d5371d58d.png)

                                                      

## 1. Synchronous methods: (Blocking code)

Synchronous functions block the execution of the program until the file operation is performed. These functions are also called blocking functions. The synchronous methods have File Descriptor as the last argument. File Descriptor is a reference to opened files. It is a number or a reference id to the file returned after opening the file using fs.open() method of the fs module. All asynchronous methods can perform synchronously just by appending “Sync” to the function name. Some of the synchronous methods of fs module in NodeJS are:

-fs.readFileSync(),
-fs.renameSync(),
-fs.writeSync(),
-fs.writeFileSync(),
-fs.fsyncSync(),
-fs.appendFileSync(),
-fs.statSync(),
-fs.readdirSync(),
-fs.existsSync()

## 2. Asynchronous methods: (Non Blocking Code)

Asynchronous functions do not block the execution of the program and each command is executed after the previous command even if the previous command has not computed the result. The previous command runs in the background and loads the result once it has finished processing. Thus, these functions are called non-blocking functions. They take a callback function as the last parameter. Asynchronous functions are generally preferred over synchronous functions as they do not block the execution of the program whereas synchronous functions block the execution of the program until it has finished processing. Some of the asynchronous methods of fs module in NodeJS are:

-fs.readFile(),
-fs.rename(),
-fs.write(),
-fs.writeFile(),
-fs.fsync(),
-fs.appendFile(),
-fs.stat(),
-fs.readdir(),
-fs.exists()


## The benefits of async: 

Heavy operations which consume time for processing such as querying huge data from a database should be done asynchronously as other operations can still be executed and thus, reducing the time of execution of the program.
![Screenshot (142)](https://user-images.githubusercontent.com/80479635/151710410-65147139-07c6-49dd-8dba-954b8d219a0a.png)



