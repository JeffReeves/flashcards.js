#!/bin/bash
# purpose: add all remotes for repo
# author: Jeff Reeves

# define repository's stub for the URL
REPO_STUB='flashcards.js'

# create the repo directory on bridges
ssh git@bridges "mkdir /git/flashcards.js.git && cd /git/flashcards.js.git && git config --global init.defaultBranch main && git init --bare && sed -i 's/master/main/' /git/rpi4-custom-os.git/HEAD"

# add bridges to git remote list
git remote add bridges git@bridges:/git/flashcards.js.git

# add gitlab to git remote list
git remote add gitlab git@gitlab.com:JeffReeves/flashcards.js.git

# add github to git remote list
git remote add github git@github.com:JeffReeves/flashcards.js.git

# update origin to bridges
git remote set-url origin git@bridges:/git/flashcards.js.git

# view all remotes
git remote -v

# open settings for gitlab and github in browser
#explorer.exe "https://gitlab.com/JeffReeves/flashcards.js/-/settings/repository"
#explorer.exe "https://gitlab.com/JeffReeves/flashcards.js/-/branches"
#explorer.exe "https://github.com/JeffReeves/flashcards.js/settings/branches"
#explorer.exe "https://github.com/JeffReeves/flashcards.js/branches"

