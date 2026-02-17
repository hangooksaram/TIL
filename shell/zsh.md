# zsh


### nvm 사용하고 있을 때

`zshrc` 에 아래 내용 추가 필요.
```zsh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```