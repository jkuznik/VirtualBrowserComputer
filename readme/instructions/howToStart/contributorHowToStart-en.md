## The following instruction was almost entirely copied from another project named <span style="color: purple;"><i>first-contributions</i></span>, available on GitHub at this [address](https://github.com/firstcontributions/first-contributions.git), and the original instruction itself is available [here](https://github.com/firstcontributions/first-contributions/blob/main/docs/translations/README.en-pirate.md). Minor changes to the content of this instruction were made to tailor it to the project you're currently working on.


## First Contributions
Doing something for the first time is always hard. This is especially true when collaborating with other
people because making mistakes can be unpleasant. However, collaboration is at the core of open-source
computer.software. We aim to teach new developers how to upload their first changes to an unfamiliar project in a
simple way.

Reading articles and watching tutorials can help, but is there anything better than trying something yourself without fear of breaking anything? This project is designed to guide newcomers and simplify the process of uploading their first contribution. Remember: the more relaxed you are, the better you learn. If you want to make your first contribution, follow the simple steps below. It will be fun, we promise.

If you don't have Git installed on your computer, install it [here](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git) .

## Fork the repository (fork)
Fork this repository by clicking the Fork button at the top of this page. This will create a copy of this repository on your account.

![](https://camo.githubusercontent.com/8547afafbabd1058a0405c82912dcacde6c336ea3789458f31234ee039c282c9/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f666f726b2e706e67)

## Clone the repository (clone)
Now clone the repository to your computer. Go to your GitHub account, open the copied repository, click the Code button, and then the copy-to-clipboard icon.

![](https://camo.githubusercontent.com/3e9cd41ded21918841c80a920f07055592b899c041a27bbe232824678f2207f0/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f636c6f6e652e706e67)
![](https://camo.githubusercontent.com/1db3f99bfd4b29355003017a64d54ae503071477a720cec75357baa5d6e2460e/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f636f70792d746f2d636c6970626f6172642e706e67)

Open your terminal and run the following Git command:

git clone <copied-address>

Where <copied-address> is the address of this repository (your copy of this project). Refer to the previous step to copy the address.

Example:

git clone git@github.com:jkuznik/virtual-computer.git

## Create a branch

Navigate to the folder of your repository (if you're not there already):

cd first-contributions
Now create a new branch by executing the following command:

git switch -c <branch-name>
Example:

git switch -c add-mario-CLI-game

## Make changes and commit them

An example of your changes could be adding your own program or CLI game. For guidance on how to do this, see here.

Then, save these changes by running the following Git command:

git commit -m "<commit-message>"
Example:

git commit -m "Add mario game"
Push changes to GitHub
Push your changes with the following command:

git push -u origin <your-branch-name>
Replace <your-branch-name> with the name of the branch you created earlier.

## Submit your changes for review

In your repository on GitHub, you'll find the Compare & pull request button. Click it.

![](https://camo.githubusercontent.com/e10bdcf31fb3f8ce863dc1dbf9269a23bce9263afcbe9a62d892e9b6e78df1c6/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f636f6d706172652d616e642d70756c6c2e706e67)

Now submit your pull request.

![](https://camo.githubusercontent.com/34a2cf737ba2f5943e3e469aa231e95a0ee4d0888c10dcaa169c1f8413d43333/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f7375626d69742d70756c6c2d726571756573742e706e67)

Soon, your proposed changes will be added to the project's main branch. You’ll be notified by email when the changes are merged.

## What's next?

Congratulations! You've just completed the standard workflow: fork → clone → edit → pull request, which you’ll often encounter as a contributor.

Celebrate your first contribution and share it with your friends.

You can join our Discord server if you need help or have any questions.

Discord channel: https://discord.gg/PPscZ7QE