## 1. Cloning the Remote Repository

1.1 To clone the repository, go to the link https://github.com/jkuznik/virtual-computer, select "Code," then SSH, and copy the link:
```bash
git@github.com:jkuznik/virtual-computer.git
```
![](clone-repo.png)
1.2 In IntelliJ, select:

New > Project from Version Control
Paste the link copied in step 1.1 into the URL field.

## 2. Creating a New Branch

According to the adopted convention, create a new branch named after the task you are working on.

Using the built-in terminal in IntelliJ (Alt+F12), create a new branch with the following command:

```bash
git switch -c task_name
```

## 3. Adding Changes and Pushing Them to the Repository
   After making changes, use the command:

```bash
git commit -am "Description of the changes made"
```
Push the changes to the remote repository

3.1 Before pushing changes to the remote repository for the first time, use the command:

```bash
git push --set-upstream origin branch_name
```
3.2 For all subsequent pushes, use the command:

```bash
git push
```